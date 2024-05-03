using System.Text.Json.Serialization;

namespace Io.Schnurr.RetailRadar.Backend.Services.Amazon.Models;

public class ProductSearch
{
    [JsonPropertyName("search_results")]
    public List<Product>? Results { get; set; }
}