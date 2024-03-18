using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.OpenAi.Models;

public class BaseEntity
{
    public string? Id { get; set; }
    public string? Object { get; set; }
    public Dictionary<string, object>? Metadata { get; set; }
    [JsonPropertyName("created_at")]
    public long? CreatedAt { get; set; }
}