using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using Io.Schnurr.AiShopper.Models.OpenAi;

namespace Io.Schnurr.AiShopper.Services;

public class OpenAiService
{
    private readonly CustomHttpClient httpClient = new();
    private const string assistandId = "asst_jzhrL5rozZI2JV4vm7UTJmmx";

    public async Task<Models.OpenAi.Thread> CreateThread()
    {
        var result = await httpClient.PostAsync("/v1/threads", new StringContent("", Encoding.UTF8, "application/json"));
        var createdThread = await result.Content.ReadFromJsonAsync<Models.OpenAi.Thread>();
        return createdThread;
    }

    public async Task<Message> CreateMessage(string thread, string message)
    {
        var result = await httpClient.PostAsJsonAsync($"/v1/threads/{thread}/messages", new { Role = "user", Content = message });
        var createdMessage = await result.Content.ReadFromJsonAsync<Message>();
        return createdMessage;
    }

    public async Task<Run> CreateRun(string thread)
    {
        var runToPost = new Run() { AssistantId = assistandId, AdditionalInstructions = "This conversation is in german" };

        string jsonData = JsonSerializer.Serialize(runToPost, new JsonSerializerOptions { IgnoreNullValues = true });
        var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
        HttpResponseMessage response = await httpClient.PostAsync($"/v1/threads/{thread}/runs", content);
        var createdRun = await response.Content.ReadFromJsonAsync<Run>();
        return createdRun;
    }

    public async Task<Run> GetRun(string thread, string run)
    {
        var result = await httpClient.GetFromJsonAsync<Run>($"/v1/threads/{thread}/runs/{run}");
        return result;
    }

    public async Task<Conversation> GetMessages(string thread)
    {
        var result = await httpClient.GetFromJsonAsync<Conversation>($"/v1/threads/{thread}/messages");
        return result;
    }

    public string GetNewestMessage(Conversation conversation)
    {
        var firstMessage = conversation?.Messages?.Single(m => m.Id == conversation.FirstId);
        var firstText = firstMessage?.Contents?.FirstOrDefault()?.Text?.Value;

        return firstText;
    }

    public async Task WaitForRunCompletion(string threadId, string runId)
    {
        var runCompleted = false;

        while (!runCompleted)
        {
            await Task.Delay(1000);

            var run = await GetRun(threadId, runId);
            runCompleted = run.CompletedAt.HasValue && run.CompletedAt > 0;
        }
    }
}
