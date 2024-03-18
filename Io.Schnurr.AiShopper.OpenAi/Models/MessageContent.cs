namespace Io.Schnurr.AiShopper.OpenAi.Models;

public class MessageContent
{
    public required string Type { get; set; }
    public MessageText? Text { get; set; }
}
