namespace Io.Schnurr.RetailRadar.Backend.Api.Dtos;

public class ThreadDto(string id, MessageDto welcomeMessage)
{
    public string Id { get; set; } = id;
    public MessageDto WelcomeMessage { get; set; } = welcomeMessage;
}