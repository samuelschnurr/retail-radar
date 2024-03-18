namespace Io.Schnurr.AiShopper.Chat;

public class ShoppingChat
{
    private AssistantService openAiService { get; } = new AssistantService();
    private Models.OpenAi.Thread? currentThread;
    private Run? currentRun;

    public async Task Start()
    {
        if (currentThread != null)
        {
            throw new InvalidOperationException($"Conversation with id '{currentThread.Id}.'already started");
        }

        currentThread = await openAiService.CreateThread();
        currentRun = await openAiService.CreateRun(currentThread.Id!);
    }

    public async Task<string> GetWelcomeMessage()
    {
        var assistantMessage = await GetMessage();

        if (string.IsNullOrWhiteSpace(assistantMessage))
        {
            return "Guten Tag. Ich bin Ihr persönlicher Shopping-Berater. Wie kann ich helfen?";
        }

        return assistantMessage;
    }

    public async Task<string> GetMessage()
    {
        await openAiService.WaitForRunCompletion(currentThread!.Id!, currentRun!.Id!);

        var conversation = await openAiService.GetMessages(currentThread!.Id!);
        var assistantMessage = openAiService.GetNewestMessage(conversation);

        return assistantMessage;
    }

    public async Task SendMessage(string message)
    {
        if (string.IsNullOrWhiteSpace(message))
        {
            throw new ArgumentNullException(nameof(message));
        }

        await openAiService.CreateMessage(currentThread!.Id!, message);
        currentRun = await openAiService.CreateRun(currentThread.Id!);
    }
}
