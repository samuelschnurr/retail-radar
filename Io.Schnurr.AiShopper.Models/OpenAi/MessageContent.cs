namespace Io.Schnurr.AiShopper.Models.OpenAi;

public class MessageContent
{
    public required string Type { get; set; }
    public MessageText? Text { get; set; }
}
