namespace Io.Schnurr.AiShopper.Models.Thread;

public class Message
{
    public string Role { get; set; } = "user";
    public string Content { get; set; }

    public Message(string message)
    {
        Content = message;
    }
}
