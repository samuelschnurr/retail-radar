namespace Io.Schnurr.AiShopper.Api.Dtos;

public class MessageDto
{
    public string Id { get; set; }
    public string Content { get; set; }
    public string Role { get; set; }

    public MessageDto(string id, string content, string role)
    {
        Id = id;
        Content = content;
        Role = role;
    }
}