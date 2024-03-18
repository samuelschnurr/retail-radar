namespace Io.Schnurr.AiShopper.OpenAi.Utils;

internal class AssistantHttpClient : HttpClient
{
    private const string baseAddress = "https://api.openai.com";

    public AssistantHttpClient(string authorizationKey)
    {
        BaseAddress = new Uri(baseAddress);
        DefaultRequestHeaders.Add("OpenAI-Beta", "assistants=v1");
        DefaultRequestHeaders.Add("Authorization", authorizationKey);
    }
}