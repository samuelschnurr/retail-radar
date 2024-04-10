using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Utils;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.TestEndpoints;

internal static class ThreadTest
{
    internal static async Task<IResult> Create(AssistantService assistantService)
    {
        var threadId = Guid.NewGuid().ToString();
        var welcomeMessage = Messages.GetWelcomeMessage(threadId);
        ThreadDto threadDto = new(threadId, welcomeMessage);

        return await Task.FromResult(TypedResults.Created($"/{nameof(threadDto)}/{threadDto.Id}", threadDto));
    }

    internal static void MapRoutes(WebApplication app)
    {
        var thread = app.MapGroup(nameof(Thread));
        thread.MapPost("/", Create);
    }
}