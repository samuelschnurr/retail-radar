using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.Models.Thread;
public class RunToPost
{
    public RunToPost(string assistandId, string instructions)
    {
        AssistantId = assistandId;
        Instructions = instructions;
    }

    [JsonPropertyName("assistant_id")]
    public string AssistantId { get; set; }
    [JsonPropertyName("instructions")]
    public string Instructions { get; set; }
}