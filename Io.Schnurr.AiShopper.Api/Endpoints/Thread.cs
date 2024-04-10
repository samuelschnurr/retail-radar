using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Utils;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Endpoints;

internal static class Thread
{
    internal static async Task<IResult> Create(AssistantService assistantService)
    {
        var assistantThread = await assistantService.CreateThreadAsync();

        if (assistantThread != null)
        {
            var welcomeMessage = ChatHelper.GetWelcomeMessage(assistantThread.Id);
            ThreadDto threadDto = new(assistantThread.Id, welcomeMessage);

            return TypedResults.Created($"/{nameof(threadDto)}/{threadDto.Id}", threadDto);
        }

        return Results.StatusCode(500);
    }

    internal static void MapRoutes(WebApplication app)
    {
        var thread = app.MapGroup(nameof(Thread));
        thread.MapPost("/", Create);
    }
}