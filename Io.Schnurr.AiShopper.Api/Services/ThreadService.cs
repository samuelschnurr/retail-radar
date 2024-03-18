using Io.Schnurr.AiShopper.OpenAi.Services;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class ThreadService
{
    internal static async Task<IResult> Create(AssistantService assistantService)
    {
        var thread = await assistantService.CreateThread();

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
        var thread = app.MapGroup(nameof(OpenAi.Models.Thread));
        thread.MapPost("/", Create);
    }
}