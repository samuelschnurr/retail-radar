using Azure.AI.OpenAI.Assistants;
using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Services;

internal static class MessageService
{
    internal static async Task<IResult> Get(AssistantService assistantService, string threadId)
    {
        var threadMessages = await assistantService.GetMessagesAsync(threadId);

        if (threadMessages != null)
        {
            var messageDtos = GetMessageDtos(threadMessages);
            return TypedResults.Ok(messageDtos);
        }

        return TypedResults.NotFound();
    }

    internal static async Task<IResult> Create(AssistantService assistantService, UserMessageDto userMessage)
    {
        var threadMessage = await assistantService.CreateMessage(userMessage.ThreadId, userMessage.Input);

        if (threadMessage != null)
        {
            var messageDto = new MessageDto(threadMessage.Id, userMessage.Input, MessageRole.User.ToString());
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

    private static List<MessageDto> GetMessageDtos(List<ThreadMessage> threadMessages)
    {
        List<MessageDto> messageDtos = [];

        foreach (var threadMessage in threadMessages)
        {
            foreach (var contentItem in threadMessage.ContentItems)
            {
                if (contentItem is MessageTextContent textItem)
                {
                    var message = new MessageDto(threadMessage.Id, textItem.Text, threadMessage.Role.ToString());
                    messageDtos.Add(message);
                }
            }
        }

        return messageDtos;
    }
}