namespace Io.Schnurr.AiShopper.Api.Dtos;

public class MessageDto(string id, string threadId, string content, string role, RunDto? run)
{
    public string Id { get; set; } = id;
    public string ThreadId { get; set; } = threadId;
    public string Content { get; set; } = content;
    public string Role { get; set; } = role;
    public RunDto? Run { get; set; } = run;
}