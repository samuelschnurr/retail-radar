namespace Io.Schnurr.AiShopper.Api.Dtos;

public class ThreadDto(string id, MessageDto welcomeMessage)
{
    public string Id { get; set; } = id;
    public MessageDto WelcomeMessage { get; set; } = welcomeMessage;
}