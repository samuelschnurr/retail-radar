using Azure.AI.OpenAI.Assistants;

namespace Io.Schnurr.AiShopper.Api.Dtos;

public class MessageDto
{
    public string Id { get; set; }
    public string Content { get; set; }
    public MessageRole Role { get; set; }

    public MessageDto(string id, string content, MessageRole role)
    {
        Id = id;
        Content = content;
        Role = role;
    }
}