using System.Text.Json.Serialization;

namespace Io.Schnurr.AiShopper.Models.OpenAi;

public class Run : BaseEntity
{
    [JsonPropertyName("assistant_id")]
    public string? AssistantId { get; set; }
    [JsonPropertyName("thread_id")]
    public string? ThreadId { get; set; }
    public string? Status { get; set; }
    [JsonPropertyName("started_at")]
    public long? StartedAt { get; set; }
    [JsonPropertyName("expires_at")]
    public long? ExpiresAt { get; set; }
    [JsonPropertyName("cancelled_at")]
    public long? CancelledAt { get; set; }
    [JsonPropertyName("failed_at")]
    public long? FailedAt { get; set; }
    [JsonPropertyName("completed_at")]
    public long? CompletedAt { get; set; }
    [JsonPropertyName("required_action")]
    public string? RequiredAction { get; set; }
    [JsonPropertyName("last_error")]
    public string? LastError { get; set; }
    public string? Model { get; set; }
    [JsonPropertyName("instructions")]
    public string? Instructions { get; set; }
    [JsonPropertyName("additional_instructions")]
    public string? AdditionalInstructions { get; set; }
    public List<string>? Tools { get; set; }
    [JsonPropertyName("file_ids")]
    public List<string>? FileIds { get; set; }
    public RunUsage? Usage { get; set; }
}