using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.Services.Amazon.Models;

public class RootObject
{
    [JsonPropertyName("search_results")]
    public List<SearchResult> SearchResults { get; set; }
}