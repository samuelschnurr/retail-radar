using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Utils;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class Run
{
    internal static async Task<IResult> Get(AssistantService assistantService, string threadId, string runId)
    {
        var threadRun = await assistantService.GetRunAsync(threadId, runId);

        if (threadRun != null)
        {
            RunDto runDto = threadRun.MapToRunDto();
            return TypedResults.Ok(runDto);
        }

        return Results.NotFound();
    }

    internal static void MapRoutes(WebApplication app)
    {
        var run = app.MapGroup(nameof(Run));
        run.MapGet("/{threadId}/{runId}", Get);
    }
}