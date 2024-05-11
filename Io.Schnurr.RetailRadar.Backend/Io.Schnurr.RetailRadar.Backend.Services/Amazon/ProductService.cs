using System.Text.RegularExpressions;
using HtmlAgilityPack;
using Microsoft.Extensions.Configuration;

namespace Io.Schnurr.RetailRadar.Backend.Services.Amazon;

public class ProductService(IConfiguration configuration)
{
    private readonly ProductHttpClient httpClient = new(configuration["Amazon:BaseAddress"]);
    private readonly string productNameRegexPattern = new(@"\[#(.*?)#\]");

    public async Task<string> GetStringWithProductLinks(string content)
    {
        MatchCollection matches = Regex.Matches(content, productNameRegexPattern);

        var result = content;

        for (int i = 0; i < matches.Count; i++)
        {
            Match match = matches[i];
            var productLink = await GetProductLinkAsync(match.Groups[1].Value);
            result = result.Replace(match.Value, productLink);
        }

        return result;
    }

    private static string? GetBestMatchingAsin(string productSearchResultHtmlContent, string searchTerm)
    {
        string dataAsinAttribute = "data-asin";
        var xPathFindAsinByKeyWord = $"//div[@{dataAsinAttribute} and @{dataAsinAttribute}!='' and contains(., '{searchTerm.ToLower()}')]";

        HtmlDocument doc = new();
        doc.LoadHtml(productSearchResultHtmlContent.ToLower());

        var relevantNodes = doc.DocumentNode.SelectNodes(xPathFindAsinByKeyWord);
        var bestMatchingAsin = relevantNodes.Select(r => r.Attributes[dataAsinAttribute].Value.ToUpper()).First();

        return bestMatchingAsin;
    }

    private async Task<string> GetProductLinkAsync(string? searchTerm)
    {
        if (string.IsNullOrWhiteSpace(searchTerm))
        {
            throw new ArgumentNullException(nameof(searchTerm));
        }

        var productSearchResultHtmlContent = await GetProductSearchResultHtmlContentAsync(searchTerm);
        var bestMatchingAsin = GetBestMatchingAsin(productSearchResultHtmlContent, searchTerm);

        if (string.IsNullOrWhiteSpace(bestMatchingAsin))
        {
            throw new InvalidOperationException(nameof(bestMatchingAsin));
        }

        var htmlLink = RenderLinkAsHtml(searchTerm, bestMatchingAsin);

        return htmlLink;
    }

    private string RenderLinkAsHtml(string searchTerm, string asin)
    {
        var affiliateId = "retaildisc0d8-21";
        var amazonAsinPath = "dp/";

        var parameters = new Dictionary<string, string>
        {
            { "associate_id", affiliateId },
            { "tag", affiliateId },
        };

        string link = $"{httpClient.BaseAddress}{amazonAsinPath}{asin}?{ProductHttpClient.CreateQueryString(parameters)}";

        var htmlLink = $"<a href='{link}' target='_blank'>{searchTerm}</a> ";

        return htmlLink;
    }

    private async Task<string> GetProductSearchResultHtmlContentAsync(string searchTerm)
    {
        string url = ProductHttpClient.GetProductSearchUrl(searchTerm);
        var request = new HttpRequestMessage(HttpMethod.Get, url);
        request.Headers.Add("Cookie", "i18n-prefs=EUR;");
        var response = await httpClient.SendAsync(request);

        if (response.IsSuccessStatusCode)
        {
            var productSearchResultHtmlContent = await response.Content.ReadAsStringAsync();

            if (productSearchResultHtmlContent == null)
            {
                throw new InvalidOperationException(nameof(productSearchResultHtmlContent));
            }

            return productSearchResultHtmlContent;
        }

        throw new HttpRequestException($"Error {response.StatusCode} while getting html content for {nameof(searchTerm)} '{searchTerm}'.");
    }
}