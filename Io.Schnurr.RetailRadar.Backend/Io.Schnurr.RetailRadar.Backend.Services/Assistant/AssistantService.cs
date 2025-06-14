﻿using Azure;
using Azure.AI.OpenAI.Assistants;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Io.Schnurr.RetailRadar.Backend.Services.Assistant;

public class AssistantService
{
    private readonly AssistantsClient client;
    private readonly CreateRunOptions runOptions;
    private readonly ILogger<AssistantService> logger;

    public AssistantService(IConfiguration configuration, ILogger<AssistantService> logger)
    {
        client = new AssistantsClient(new Uri(configuration["OpenAi:BaseAddress"]), new AzureKeyCredential(configuration["OpenAi:Authorization"]));
        runOptions = new CreateRunOptions(configuration["OpenAi:AssistantId"]);
        this.logger = logger;
    }

    public async Task<AssistantThread> CreateThreadAsync()
    {
        var thread = await client.CreateThreadAsync();

        if (thread == null || string.IsNullOrWhiteSpace(thread.Value.Id))
        {
            throw new InvalidOperationException(nameof(thread));
        }

        logger.LogInformation("New Thread has been created: {ThreadId}", thread.Value.Id);

        return thread.Value;
    }

    public async Task<ThreadRun?> CreateRunAsync(string threadId)
    {
        if (string.IsNullOrWhiteSpace(threadId))
        {
            throw new ArgumentNullException(nameof(threadId));
        }

        var run = await client.CreateRunAsync(threadId, runOptions);

        return run?.Value;
    }

    public async Task<ThreadRun?> GetRunAsync(string threadId, string runId)
    {
        if (string.IsNullOrWhiteSpace(threadId))
        {
            throw new ArgumentNullException(nameof(threadId));
        }

        if (string.IsNullOrWhiteSpace(runId))
        {
            throw new ArgumentNullException(nameof(runId));
        }

        var run = await client.GetRunAsync(threadId, runId);

        return run?.Value;
    }

    public async Task<ThreadMessage?> CreateMessage(string threadId, string content)
    {
        if (string.IsNullOrWhiteSpace(threadId))
        {
            throw new ArgumentNullException(nameof(threadId));
        }

        if (string.IsNullOrWhiteSpace(content))
        {
            throw new ArgumentNullException(nameof(content));
        }

        var message = await client.CreateMessageAsync(threadId, MessageRole.User, content);

        return message?.Value;
    }

    public async Task<ThreadMessage?> GetMessageAsync(string threadId, string runId)
    {
        if (string.IsNullOrWhiteSpace(threadId))
        {
            throw new ArgumentNullException(nameof(threadId));
        }

        if (string.IsNullOrWhiteSpace(runId))
        {
            throw new ArgumentNullException(nameof(runId));
        }

        List<ThreadMessage> response = await GetMessagesAsync(threadId);
        var message = response?.SingleOrDefault(t => t.RunId == runId);

        return message;
    }

    private async Task<List<ThreadMessage>> GetMessagesAsync(string threadId)
    {
        if (string.IsNullOrWhiteSpace(threadId))
        {
            throw new ArgumentNullException(nameof(threadId));
        }

        Response<PageableList<ThreadMessage>> response = await client.GetMessagesAsync(threadId);
        List<ThreadMessage> messages = [.. response.Value.Data];

        return messages;
    }
}