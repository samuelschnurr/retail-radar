using Io.Schnurr.AiShopper.Services;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class RunService
{
    internal static async Task<IResult> Get(string threadId, string runId)
    {
        var run = await OpenAiService.GetRun(threadId, runId);

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
        var run = app.MapGroup(nameof(Models.OpenAi.Run));
        run.MapGet("/{threadId}/{runId}", RunService.Get);
    }
}