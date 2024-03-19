namespace Io.Schnurr.AiShopper.Api.Dtos;

public class RunDto
{
    public string Id { get; set; }
    public string Status { get; set; }

    public RunDto(string id, string status)
    {
        Id = id;
        Status = status;
    }
}
