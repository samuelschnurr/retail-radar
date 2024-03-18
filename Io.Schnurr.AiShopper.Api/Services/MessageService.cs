using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Services;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class MessageService
{
    internal static async Task<IResult> Get(string threadId)
    {
        var message = await OpenAiService.GetMessages(threadId);

        if (message != null)
        {
            return TypedResults.Created($"/{nameof(message)}/{message.FirstId}", message);
        }
        else
        {
            return Results.NoContent();
        }
    }

    internal static async Task<IResult> Create(UserMessageDto userMessage)
    {
        var message = await OpenAiService.CreateMessage(userMessage.ThreadId, userMessage.Input);

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
        var message = app.MapGroup(nameof(Models.OpenAi.Message));
        message.MapGet("/{threadId}", MessageService.Get);
        message.MapPost("/", MessageService.Create);
    }
}