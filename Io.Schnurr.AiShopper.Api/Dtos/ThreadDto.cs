namespace Io.Schnurr.AiShopper.Api.Dtos;

public class ThreadDto
{
    public string Id { get; set; }
    public MessageDto WelcomeMessage { get; set; }

    public ThreadDto(string id, MessageDto welcomeMessage)
    {
        Id = id;
        WelcomeMessage = welcomeMessage;
    }
}