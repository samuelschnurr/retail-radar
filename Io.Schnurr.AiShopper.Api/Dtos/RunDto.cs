using Azure.AI.OpenAI.Assistants;

namespace Io.Schnurr.AiShopper.Api.Dtos;

public class RunDto
{
    public string Id { get; set; }
    public RunStatus Status { get; set; }

    public RunDto(string id, RunStatus status)
    {
        Id = id;
        Status = status;
    }
}
