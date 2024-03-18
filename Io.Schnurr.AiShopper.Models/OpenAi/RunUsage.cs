using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.Models.OpenAi;

public class RunUsage
{
    [JsonPropertyName("prompt_tokens")]
    public int PromptTokens { get; set; }
    [JsonPropertyName("completion_tokens")]
    public int CompletionTokens { get; set; }
    [JsonPropertyName("total_tokens")]
    public int TotalTokens { get; set; }
}