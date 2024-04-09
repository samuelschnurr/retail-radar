using Azure.AI.OpenAI.Assistants;

namespace Io.Schnurr.AiShopper.Services.OpenAi;
public interface IAssistantService
{
    Task<ThreadMessage?> CreateMessage(string threadId, string content);
    Task<ThreadRun?> CreateRunAsync(string threadId);
    Task<AssistantThread> CreateThreadAsync();
    Task<ThreadMessage?> GetMessageAsync(string threadId, string runId);
    Task<ThreadRun?> GetRunAsync(string threadId, string runId);
}