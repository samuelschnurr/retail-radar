using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Utils;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class Message
{
    internal static async Task<IResult> Get(AssistantService assistantService, string threadId)
    {
        var threadMessages = await assistantService.GetMessagesAsync(threadId);
        var threadRuns = await assistantService.GetRunsAsync(threadId);

        if (threadMessages != null)
        {
            List<MessageDto> messageDtos = [];

            foreach (var threadMessage in threadMessages)
            {
                var threadRun = threadRuns?.SingleOrDefault(t => t.Id == threadMessage.RunId);
                var messageDto = threadMessage.MapToMessageDto(threadRun);
                messageDtos.Add(messageDto);
            }

            return TypedResults.Ok(messageDtos);
        }

        return TypedResults.NotFound();
    }

    internal static async Task<IResult> Create(AssistantService assistantService, MessageDto message)
    {
        var threadMessage = await assistantService.CreateMessage(message.ThreadId, message.Content);
        var threadRun = await assistantService.CreateRunAsync(message.ThreadId);

        if (threadMessage != null && threadRun != null)
        {
            MessageDto messageDto = threadMessage.MapToMessageDto(threadRun);
            return TypedResults.Created($"/{nameof(messageDto)}/{messageDto.Id}", messageDto);
        }

        return Results.StatusCode(500);
    }

    internal static void MapRoutes(WebApplication app)
    {
        var message = app.MapGroup(nameof(Message));
        message.MapGet("/{threadId}", Get);
        message.MapPost("/", Create);
    }
}