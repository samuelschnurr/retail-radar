using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Utils;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Endpoints;

internal static class Message
{
    internal static async Task<IResult> Get(AssistantService assistantService, string threadId, string runId)
    {
        var threadMessages = await assistantService.GetMessagesAsync(threadId);
        var threadMessage = threadMessages?.SingleOrDefault(t => t.RunId == runId);

        if (threadMessage != null)
        {
            var threadRun = await assistantService.GetRunAsync(threadId, runId);
            var messageDto = threadMessage.MapToMessageDto(threadRun);
            return TypedResults.Ok(messageDto);
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
        message.MapGet("/", Get);
        message.MapPost("/", Create);
    }
}