using System.Net.Http.Json;
using Io.Schnurr.AiShopper.Models.Product;
using Microsoft.Extensions.Configuration;

namespace Io.Schnurr.AiShopper.Services;

public class ProductService
{
    private readonly IConfiguration configuration;
    private readonly HttpClient httpClient;

    public ProductService(IConfiguration configuration)
    {
        this.configuration = configuration;
        httpClient = new HttpClient();
    }

    public async Task<string> FindAmazonLinkForSearchTerm(string? searchTerm)
    {
        if (string.IsNullOrWhiteSpace(searchTerm))
        {
            throw new ArgumentNullException(nameof(searchTerm));
        }

        var apiUrl = GenerateApiUrl(searchTerm);
        var rootObject = await ExecuteGetAsync(apiUrl);
        var bestProduct = GetBestMatchingProduct(rootObject);
        return bestProduct.Link;
    }

    private SearchResult GetBestMatchingProduct(RootObject rootObejct) => rootObejct.SearchResults.First();

    private async Task<RootObject> ExecuteGetAsync(string apiUrl)
    {
        HttpResponseMessage response = await httpClient.GetAsync(apiUrl);

        if (response.IsSuccessStatusCode)
        {
            var rootObject = await response.Content.ReadFromJsonAsync<RootObject>();
            return rootObject!;
        }
        else
        {
            throw new HttpRequestException($"Fehler beim Abrufen der Daten. Statuscode: {response.StatusCode}");
        }
    }

    private string GenerateApiUrl(string searchTerm)
    {
        string apiBaseUrl = "https://api.asindataapi.com/request";
        string apiKey = configuration["ApiKey"];
        string affiliateId = "retaildisc0d8-21";

        string apiUrl = $"{apiBaseUrl}?api_key={apiKey}&search_term={searchTerm}&associate_id={affiliateId}&tag={affiliateId}&type=search&amazon_domain=amazon.de&language=de_DE&exclude_sponsored=true&page=1&max_page=1&output=json&include_html=false";

        return apiUrl;
    }
}