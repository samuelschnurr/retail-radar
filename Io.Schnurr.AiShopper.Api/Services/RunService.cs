using Io.Schnurr.AiShopper.OpenAi.Services;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class RunService
{
    internal static async Task<IResult> Get(AssistantService assistantService, string threadId, string runId)
    {
        var run = await assistantService.GetRun(threadId, runId);

        if (run != null)
        {
            return TypedResults.Created($"/{nameof(run)}/{run.Id}", run);
        }
        else
        {
            return Results.NoContent();
        }
    }

    internal static void MapRoutes(WebApplication app)
    {
        var run = app.MapGroup(nameof(OpenAi.Models.Run));
        run.MapGet("/{threadId}/{runId}", Get);
    }
}