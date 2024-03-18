namespace Io.Schnurr.AiShopper.Models.OpenAi;

using System.Text.Json.Serialization;

public class RunPOST
{
    [JsonPropertyName("assistant_id")]
    public string? AssistantId { get; set; }
}
