using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.Models.Product;

public class RootObject
{
    [JsonPropertyName("search_results")]
    public List<SearchResult> SearchResults { get; set; }
}