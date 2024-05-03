namespace Io.Schnurr.AiShopper.Api.Dtos;

public class RunDto(string id, string status)
{
    public string Id { get; set; } = id;
    public string Status { get; set; } = status;
}
