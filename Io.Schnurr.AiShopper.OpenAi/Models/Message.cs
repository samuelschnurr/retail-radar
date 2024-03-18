namespace Io.Schnurr.AiShopper.OpenAi.Models;

using System.Collections.Generic;
using System.Text.Json.Serialization;

public class Message : BaseEntity
{
    [JsonPropertyName("assistant_id")]
    public string? AssistantId { get; set; }
    [JsonPropertyName("thread_id")]
    public string? ThreadId { get; set; }
    [JsonPropertyName("run_id")]
    public string? RunId { get; set; }
    public required string Role { get; set; }
    [JsonPropertyName("content")]
    public required List<MessageContent> Contents { get; set; }
    [JsonPropertyName("file_ids")]
    public List<string>? FileIds { get; set; }
}
