using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.Models.Thread;
public class Thread
{
    public string Id { get; set; }
    public string Object { get; set; }

    [JsonPropertyName("created_at")]
    public long CreatedAt { get; set; }

    public Dictionary<string, object> Metadata { get; set; }
}
