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
    private readonly string productNameRegexPattern = new(@"\[#(.*?)#\]");
    private const string amazonAsinSegment = "dp/";
    private const string uriScheme = "https://";

    public async Task<string> GetStringWithProductLinks(string content, string region)
    {
        MatchCollection matches = Regex.Matches(content, productNameRegexPattern);

        var result = content;

        List<ProductSearchResult> productSearchResults = [];

        for (int i = 0; i < matches.Count; i++)
        {
            Match match = matches[i];
            var productLink = await GetProductLinkAsync(productSearchResults, match.Groups[1].Value, region);
            result = result.Replace(match.Value, productLink);

            logger.LogInformation("Replaced product name {MatchResult} with {ProductLink}", match.Value, productLink);
        }

        return result;
    }

    private ProductSearchResult GetBestMatchingProductSearchResult(List<Result>? searchResults, string searchTerm)
    {
        ProductSearchResult productSearchResult = new()
        {
            SearchTerm = searchTerm
        };

        var bestMatchingItem = searchResults?.FirstOrDefault();

        if (bestMatchingItem == null)
        {
            return productSearchResult;
        }

        var uri = new Uri(bestMatchingItem.Link);

        productSearchResult.BaseAddress = uriScheme + uri.Authority + "/";

        try
        {
            Newtonsoft.Json.Linq.JToken? imageSource = ((Newtonsoft.Json.Linq.JArray)bestMatchingItem.Pagemap["cse_thumbnail"]).FirstOrDefault();
            productSearchResult.ImageSource = imageSource?.Value<string>("src") ?? string.Empty;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error occurred while extracting image source from search result.");
            productSearchResult.ImageSource = string.Empty;
        }

        var dpIndex = Array.IndexOf(uri.Segments, amazonAsinSegment);
        productSearchResult.Asin = uri.Segments.ElementAtOrDefault(dpIndex + 1);

        productSearchResult.AffiliateId = GetAffiliateId(uri.Authority);

        return productSearchResult;
    }


    private async Task<string> GetProductLinkAsync(List<ProductSearchResult> productSearchResults, string searchTerm, string region)
    {
        if (string.IsNullOrWhiteSpace(searchTerm))
        {
            throw new ArgumentNullException(nameof(searchTerm));
        }

        string htmlLink;

        var existingResult = productSearchResults.Find(p => string.Equals(p.SearchTerm, searchTerm));

        if (existingResult != null)
        {
            htmlLink = RenderProductSearchResultAsHtml(existingResult, region, false);
        }
        else
        {
            var newProductSearchResults = await searchClient.GetProductSearchResults(searchTerm, region);
            var bestMatchingProductSearchResult = GetBestMatchingProductSearchResult(newProductSearchResults, searchTerm);

            if (bestMatchingProductSearchResult.IsValid())
            {
                productSearchResults.Add(bestMatchingProductSearchResult);
            }

            htmlLink = RenderProductSearchResultAsHtml(bestMatchingProductSearchResult, region, true);
        }

        return htmlLink;
    }

    private static string RenderProductSearchResultAsHtml(ProductSearchResult productSearchResult, string region, bool isFirstOccurance)
    {
        string link;
        string htmlLink;

        var parameters = new Dictionary<string, string>
        {
            { "associate_id", productSearchResult.AffiliateId ?? GetAffiliateId(region)  },
            { "tag", productSearchResult.AffiliateId ?? GetAffiliateId(region)},
        };

        if (productSearchResult.IsValid())
        {
            link = $"{productSearchResult.BaseAddress}{amazonAsinSegment}{productSearchResult.Asin}?{ProductSearchClient.CreateQueryString(parameters)}";
        }
        else
        {
            string encodedSearchTerm = HttpUtility.UrlEncode(productSearchResult.SearchTerm!);
            link = $"{uriScheme}www.amazon{region}/s?k={encodedSearchTerm}&{ProductSearchClient.CreateQueryString(parameters)}";
        }

        if (isFirstOccurance)
        {
            // Show with image
            htmlLink = @$"<a href='{link}' target='_blank' class='amazonImageLink'>
                <img
                    src='{productSearchResult.ImageSource ?? "{amazonLogo}"}'
                    alt='Product' />
                <div>            
                    {productSearchResult.SearchTerm}
                </div>
            </a>";
        }
        else
        {
            // Show as text
            htmlLink = $"<a href='{link}' target='_blank'>{productSearchResult.SearchTerm}</a> ";
        }

        return htmlLink;
    }

    private static string GetAffiliateId(string authority)
    {
        return authority switch
        {
            ".com.au" => "retailradar.io-au-22",
            ".co.uk" => "retailradar.io-uk-21",
            ".de" => "retailradar.io-de-21",
            ".es" => "retailradar.io-es-21",
            ".fr" => "retailradar.io-fr-21",
            ".it" => "retailradar.io-it-21",
            _ => "retailradar.io-us-20",
        };
    }
}