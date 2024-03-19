using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class RunService
{
    internal static async Task<IResult> Create(AssistantService assistantService, string threadId)
    {
        var threadRun = await assistantService.CreateRunAsync(threadId);

        if (threadRun != null)
        {
            RunDto runDto = new(threadRun.Id, threadRun.Status);
            return TypedResults.Created($"/{nameof(runDto)}/{runDto.Id}", runDto);
        }

        return Results.StatusCode(500);
    }

    internal static async Task<IResult> Get(AssistantService assistantService, string threadId, string runId)
    {
        var threadRun = await assistantService.GetRunAsync(threadId, runId);

        if (threadRun != null)
        {
            RunDto runDto = new(threadRun.Id, threadRun.Status);
            return TypedResults.Ok(runDto);
        }

        return Results.NotFound();
    }

    internal static void MapRoutes(WebApplication app)
    {
        var run = app.MapGroup("Run");
        run.MapGet("/{threadId}/{runId}", Get);
        run.MapPost("/", Create);
    }
}