namespace Io.Schnurr.AiShopper.Services;

internal class CustomHttpClient : HttpClient
{
    private const string baseAddress = "https://api.openai.com";

    public CustomHttpClient()
    {
        BaseAddress = new Uri(baseAddress);
        DefaultRequestHeaders.Add("OpenAI-Beta", "assistants=v1");
        DefaultRequestHeaders.Add("Authorization", "Bearer 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");
    }
}