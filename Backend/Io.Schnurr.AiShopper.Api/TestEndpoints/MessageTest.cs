using Io.Schnurr.AiShopper.Api.Dtos;
using Io.Schnurr.AiShopper.Api.Endpoints;
using Io.Schnurr.AiShopper.Services.Amazon;
using Io.Schnurr.AiShopper.Services.OpenAi;

namespace Io.Schnurr.AiShopper.Api.TestEndpoints;

internal static class MessageTest
{
    internal static async Task<IResult> Get(AssistantService assistantService, ProductService productService, string threadId, string runId)
    {
        var runDto = new RunDto(runId, "completed");
        var messageDto = new MessageDto(Guid.NewGuid().ToString(), threadId, "Test Response", "assistant", runDto);

        return await Task.FromResult(TypedResults.Ok(messageDto));
    }

    internal static async Task<IResult> Create(AssistantService assistantService, MessageDto message)
    {
        var runDto = new RunDto(Guid.NewGuid().ToString(), "in_progress");
        var messageDto = new MessageDto(Guid.NewGuid().ToString(), message.ThreadId, message.Content, "user", runDto);

        return await Task.FromResult(TypedResults.Created($"/{nameof(messageDto)}/{messageDto.Id}", messageDto));
    }

    internal static void MapRoutes(WebApplication app)
    {
        var message = app.MapGroup(nameof(Message));
        message.MapGet("/", Get);
        message.MapPost("/", Create);
    }
}