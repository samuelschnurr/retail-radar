using Io.Schnurr.RetailRadar.Backend.Api.Dtos;
using Io.Schnurr.RetailRadar.Backend.Api.Utils;
using Io.Schnurr.RetailRadar.Backend.Services.OpenAi;

namespace Io.Schnurr.RetailRadar.Backend.Api.TestEndpoints;

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