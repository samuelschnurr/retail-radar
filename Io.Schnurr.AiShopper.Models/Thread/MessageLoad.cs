namespace Io.Schnurr.AiShopper.Models.Thread;

using System.Collections.Generic;
using System.Text.Json.Serialization;

public class MessageContent
{
    public string Type { get; set; }
    public TextContent Text { get; set; }
}

public class TextContent
{
    public string Value { get; set; }
    public List<object> Annotations { get; set; }
}

public class MessageData
{
    public string Id { get; set; }
    public string Object { get; set; }
    [JsonPropertyName("created_at")]
    public long CreatedAt { get; set; }
    [JsonPropertyName("assistant_id")]
    public string AssistantId { get; set; }
    [JsonPropertyName("thread_id")]
    public string ThreadId { get; set; }
    [JsonPropertyName("run_id")]
    public string RunId { get; set; }
    public string Role { get; set; }
    public List<MessageContent> Content { get; set; }
    [JsonPropertyName("file_ids")]
    public List<string> FileIds { get; set; }
    public Dictionary<string, object> Metadata { get; set; }
}

public class MessageObject
{
    public string Object { get; set; }
    public List<MessageData> Data { get; set; }
    [JsonPropertyName("first_id")]
    public string FirstId { get; set; }
    [JsonPropertyName("last_id")]
    public string LastId { get; set; }
    [JsonPropertyName("has_more")]
    public bool HasMore { get; set; }
}
