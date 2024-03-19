namespace Io.Schnurr.AiShopper.Api.Dtos;

public class ThreadDto
{
    public string Id { get; set; }
    public List<RunDto> Runs { get; set; }
    public List<MessageDto> Messages { get; set; }

    public ThreadDto(string id, MessageDto welcomeMessage)
    {
        Id = id;
        Runs = [];
        Messages = [welcomeMessage];
    }
}
