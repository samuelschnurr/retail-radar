using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using Io.Schnurr.AiShopper.Models.OpenAi;

namespace Io.Schnurr.AiShopper.Services;

public class ShoppingService
{
    private readonly HttpClient httpClient;
    private const string baseUrl = "https://api.openai.com";
    private const string assistandId = "asst_jzhrL5rozZI2JV4vm7UTJmmx";
    private Models.OpenAi.Thread thread;
    private string currentUserMessage;

    public string CurrentUserMessage
    {
        get { return currentUserMessage; }
        set
        {
            currentUserMessage = value;
            ExecuteCommunication().Wait();
        }
    }

    public ShoppingService()
    {
        httpClient = new HttpClient
        {
            BaseAddress = new Uri(baseUrl)
        };

        httpClient.DefaultRequestHeaders.Add("OpenAI-Beta", "assistants=v1");
        httpClient.DefaultRequestHeaders.Add("Authorization", "Bearer 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");
    }

    public async Task InitShopping()
    {
        thread = await CreateNewThread();
        Console.WriteLine("Hallo. Nach was für einem Produkt suchst du?");
        currentUserMessage = Console.ReadLine();
        await ExecuteCommunication();
    }

    public async Task ExecuteCommunication()
    {
        var message = await CreateMessage(thread.Id, currentUserMessage);
        var run = await CreateRun(thread.Id);

        var pollRun = await GetRun(thread.Id, run.Id);

        while (pollRun.CompletedAt == null || pollRun.CompletedAt <= 0)
        {
            await Task.Delay(1000);
            pollRun = await GetRun(thread.Id, run.Id);
        }

        var messages = await GetMessages(thread.Id);
        var lastMessage = messages.Messages.Single(d => d.Id == messages.FirstId).Contents.First().Text.Value;
        Console.WriteLine(lastMessage);

        CurrentUserMessage = Console.ReadLine();
    }

    public async Task<Models.OpenAi.Thread> CreateNewThread()
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
        var runToPost = new Run() { AssistantId = assistandId };

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
}
