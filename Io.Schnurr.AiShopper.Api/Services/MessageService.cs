using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Utils;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class MessageService
{
    internal static async Task<IResult> Get(AssistantService assistantService, string threadId)
    {
        var threadMessages = await assistantService.GetMessagesAsync(threadId);

        if (threadMessages != null)
        {
            List<MessageDto> messageDtos = [];

            foreach (var threadMessage in threadMessages)
            {
                var messageDto = threadMessage.MapToMessageDto();
                messageDtos.Add(messageDto);
            }

            return TypedResults.Ok(messageDtos);
        }

        return TypedResults.NotFound();
    }

    internal static async Task<IResult> Create(AssistantService assistantService, MessageDto message)
    {
        var threadMessage = await assistantService.CreateMessage(message.ThreadId, message.Content);

        if (threadMessage != null)
        {
            MessageDto messageDto = threadMessage.MapToMessageDto();
            return TypedResults.Created($"/{nameof(messageDto)}/{messageDto.Id}", messageDto);
        }

        return Results.StatusCode(500);
    }

    internal static void MapRoutes(WebApplication app)
    {
        var message = app.MapGroup("Message");
        message.MapGet("/{threadId}", Get);
        message.MapPost("/", Create);
    }
}