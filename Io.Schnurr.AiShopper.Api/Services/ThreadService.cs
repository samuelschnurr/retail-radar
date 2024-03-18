using Io.Schnurr.AiShopper.Services;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class ThreadService
{
    internal static async Task<IResult> Create()
    {
        var thread = await OpenAiService.CreateThread();

        if (thread != null)
        {
            return TypedResults.Created($"/{nameof(thread)}/{thread.Id}", thread);
        }
        else
        {
            return Results.NoContent();
        }
    }

    internal static void MapRoutes(WebApplication app)
    {
        var thread = app.MapGroup(nameof(Models.OpenAi.Thread));
        thread.MapPost("/", ThreadService.Create);
    }
}