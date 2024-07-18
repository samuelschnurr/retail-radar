using System.Text.RegularExpressions;
using System.Web;
using Google.Apis.CustomSearchAPI.v1.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Io.Schnurr.RetailRadar.Backend.Services.Product;

public class ProductService(IConfiguration configuration, ILogger<ProductService> logger)
{
    private readonly ILogger<ProductService> logger = logger;
    private readonly ProductSearchClient searchClient = new(logger, configuration["Google:Authorization"], configuration["Google:EngineId"]);
    private readonly string affiliateId = configuration["Amazon:AffiliateId"];
    private readonly string productNameRegexPattern = new(@"\[#(.*?)#\]");
    private const string amazonBaseAddress = "https://www.amazon.de/";
    private const string amazonAsinSegment = "dp/";

    public async Task<string> GetStringWithProductLinks(string content)
    {
        MatchCollection matches = Regex.Matches(content, productNameRegexPattern);

        var result = content;

        Dictionary<string, string?> searchTermAsins = [];

        for (int i = 0; i < matches.Count; i++)
        {
            Match match = matches[i];
            var productLink = await GetProductLinkAsync(searchTermAsins, match.Groups[1].Value);
            result = result.Replace(match.Value, productLink);

            logger.LogInformation("Replaced product name {MatchResult} with {ProductLink}", match.Value, productLink);
        }

        return result;
    }

    private static string? GetBestMatchingAsin(List<Result>? searchResults)
    {
        if (searchResults == null)
        {
            return null;
        }

        var bestMatchingItem = searchResults.FirstOrDefault();

        if (bestMatchingItem == null)
        {
            return null;
        }

        var uri = new Uri(bestMatchingItem.Link);
        var dpIndex = Array.IndexOf(uri.Segments, amazonAsinSegment);
        var bestMatchingAsin = uri.Segments.ElementAtOrDefault(dpIndex + 1);

        return bestMatchingAsin;
    }

    private async Task<string> GetProductLinkAsync(Dictionary<string, string?> searchTermAsins, string? searchTerm)
    {
        if (string.IsNullOrWhiteSpace(searchTerm))
        {
            throw new ArgumentNullException(nameof(searchTerm));
        }

        string htmlLink;

        if (searchTermAsins.TryGetValue(searchTerm, out string? value))
        {
            htmlLink = RenderLinkAsHtml(searchTerm, value);
        }
        else
        {
            var productSearchResults = await searchClient.GetProductSearchResults(searchTerm);
            var bestMatchingAsin = GetBestMatchingAsin(productSearchResults);

            if (!string.IsNullOrWhiteSpace(bestMatchingAsin))
            {
                searchTermAsins.Add(searchTerm, bestMatchingAsin);
            }

            htmlLink = RenderLinkAsHtml(searchTerm, bestMatchingAsin);
        }

        return htmlLink;
    }

    private string RenderLinkAsHtml(string searchTerm, string? asin)
    {
        var parameters = new Dictionary<string, string>
        {
            { "associate_id", affiliateId },
            { "tag", affiliateId },
        };

        string link;

        if (string.IsNullOrWhiteSpace(asin))
        {
            string encodedSearchTerm = HttpUtility.UrlEncode(searchTerm);
            link = $"https://www.google.de/search?q={encodedSearchTerm}";
        }
        else
        {
            link = $"{amazonBaseAddress}{amazonAsinSegment}{asin}?{ProductSearchClient.CreateQueryString(parameters)}";
        }

        var htmlLink = $"<a href='{link}' target='_blank'>{searchTerm}</a> ";

        return htmlLink;
    }
}