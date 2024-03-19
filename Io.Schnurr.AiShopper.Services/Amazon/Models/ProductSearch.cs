using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.Services.Amazon.Models;

public class ProductSearch
{
    [JsonPropertyName("search_results")]
    public List<Product>? Results { get; set; }
}