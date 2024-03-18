using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.OpenAi.Services;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class MessageService
{
    internal static async Task<IResult> Get(AssistantService assistantService, string threadId)
    {
        var message = await assistantService.GetMessages(threadId);

        if (message != null)
        {
            return TypedResults.Created($"/{nameof(message)}/{message.FirstId}", message);
        }
        else
        {
            return Results.NoContent();
        }
    }

    internal static async Task<IResult> Create(AssistantService assistantService, UserMessageDto userMessage)
    {
        var message = await assistantService.CreateMessage(userMessage.ThreadId, userMessage.Input);

        if (message != null)
        {
            return TypedResults.Created($"/{nameof(message)}/{message.Id}", message);
        }
        else
        {
            return Results.NoContent();
        }
    }

    internal static void MapRoutes(WebApplication app)
    {
        var message = app.MapGroup(nameof(OpenAi.Models.Message));
        message.MapGet("/{threadId}", Get);
        message.MapPost("/", Create);
    }
}