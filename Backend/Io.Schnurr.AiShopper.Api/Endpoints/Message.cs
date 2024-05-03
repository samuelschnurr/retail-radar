using Azure.AI.OpenAI.Assistants;
using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Utils;
using Io.Schnurr.AiShopper.Services.Amazon;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.Endpoints;

internal static class Message
{
    internal static async Task<IResult> Get(AssistantService assistantService, ProductService productService, string threadId, string runId)
    {
        var threadRun = await assistantService.GetRunAsync(threadId, runId);
        var threadMessage = await assistantService.GetMessageAsync(threadId, runId);

        if (threadMessage == null && threadRun?.Status == RunStatus.InProgress)
        {
            return TypedResults.Accepted("The message object hast not been created yet.");
        }

        if (threadMessage != null)
        {
            var messageDto = threadMessage.MapToMessageDto(threadRun);
            messageDto.Content = await productService.GetStringWithProductLinks(messageDto.Content);

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