﻿using Azure.AI.OpenAI.Assistants;
using Io.Schnurr.RetailRadar.Backend.Api.Dtos;
using Io.Schnurr.RetailRadar.Backend.Api.Utils;
using Io.Schnurr.RetailRadar.Backend.Services.Assistant;
using Io.Schnurr.RetailRadar.Backend.Services.Product;

namespace Io.Schnurr.RetailRadar.Backend.Api.Endpoints;

internal static class Message
{
    internal static async Task<IResult> Get(AssistantService assistantService, ProductService productService, string threadId, string runId, string marketplaceRegion)
    {
        var threadRun = await assistantService.GetRunAsync(threadId, runId);
        var threadMessage = await assistantService.GetMessageAsync(threadId, runId);

        if (threadMessage == null
            && (threadRun?.Status == RunStatus.InProgress || threadRun?.Status == RunStatus.Queued))
        {
            return TypedResults.Accepted("The message object hast not been created yet.");
        }

        if (threadMessage != null)
        {
            var messageDto = threadMessage.MapToMessageDto(threadRun);
            messageDto.MarketplaceRegion = marketplaceRegion;
            messageDto.Content = await productService.GetStringWithProductLinks(messageDto.Content, messageDto.MarketplaceRegion);

            return TypedResults.Ok(messageDto);
        }

        return TypedResults.NotFound();
    }

    internal static async Task<IResult> Create(AssistantService assistantService, MessageDto message)
    {
        var threadMessage = await assistantService.CreateMessage(message.ThreadId, message.Content.TrimEnd());
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