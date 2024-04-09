using System.Net.Http.Json;
using System.Text.RegularExpressions;
using Io.Schnurr.AiShopper.Services.Amazon.Models;
using Microsoft.Extensions.Configuration;

namespace Io.Schnurr.AiShopper.Services.Amazon;

public class ProductService : IProductService
{
    private readonly ProductHttpClient httpClient;
    private readonly string productNameRegexPattern = new(@"\[#(.*?)#\]");

    public ProductService(IConfiguration configuration)
    {
        httpClient = new ProductHttpClient(configuration["Amazon:Authorization"]);
    }

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

    private Product? GetBestMatchingProduct(ProductSearch productSearch) => productSearch?.Results?.FirstOrDefault();

    private async Task<string> GetProductLinkAsync(string? searchTerm)
    {
        if (string.IsNullOrWhiteSpace(searchTerm))
        {
            throw new ArgumentNullException(nameof(searchTerm));
        }

        var productSearch = await GetProductSearchAsync(searchTerm);
        var bestMatchingProduct = GetBestMatchingProduct(productSearch);

        if (bestMatchingProduct == null || string.IsNullOrWhiteSpace(bestMatchingProduct.Link))
        {
            throw new InvalidOperationException(nameof(bestMatchingProduct));
        }

        var htmlLink = RenderLinkAsHtml(searchTerm, bestMatchingProduct!.Link!);

        return htmlLink;
    }

    private string RenderLinkAsHtml(string searchTerm, string link)
    {
        var htmlLink = $"<a href='{link}' target='_blank'>{searchTerm}</a> ";

        return htmlLink;
    }

    private async Task<ProductSearch> GetProductSearchAsync(string searchTerm)
    {
        string url = httpClient.GetProductSearchUrl(searchTerm);
        HttpResponseMessage response = await httpClient.GetAsync(url);

        if (response.IsSuccessStatusCode)
        {
            var productSearchResult = await response.Content.ReadFromJsonAsync<ProductSearch>();

            if (productSearchResult == null)
            {
                throw new InvalidOperationException(nameof(productSearchResult));
            }

            return productSearchResult;
        }

        throw new HttpRequestException($"Error {response.StatusCode} while getting {nameof(ProductSearch)}.");
    }
}