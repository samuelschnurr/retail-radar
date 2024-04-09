using Azure.AI.OpenAI.Assistants;
using Io.Schnurr.AiShopper.Services.Utils;

namespace Io.Schnurr.AiShopper.Services.OpenAi;

public class AssistantTestDataService : IAssistantService
{
    public async Task<AssistantThread> CreateThreadAsync()
    {
        var thread = InstanceHelper.CreateInstance<AssistantThread>("threadIdTest_" + Guid.NewGuid(),
                                                                    DateTimeOffset.Now,
                                                                    new Dictionary<string, string>());

        return await Task.FromResult(thread);
    }

    public async Task<ThreadRun?> CreateRunAsync(string threadId)
    {
        var threadRun = InstanceHelper.CreateInstance<ThreadRun>("runIdTest_" + Guid.NewGuid(), threadId, "",
                                                                 RunStatus.InProgress,
                                                                 InstanceHelper.CreateInstance<RunError>("", ""),
                                                                 "", "",
                                                                 new List<ToolDefinition>(), new List<string>(),
                                                                 DateTimeOffset.Now, DateTimeOffset.Now,
                                                                 DateTimeOffset.Now, DateTimeOffset.Now,
                                                                 DateTimeOffset.Now, DateTimeOffset.Now,
                                                                 new Dictionary<string, string>());
        return await Task.FromResult(threadRun);
    }

    public async Task<ThreadRun?> GetRunAsync(string threadId, string runId)
    {
        var threadRun = InstanceHelper.CreateInstance<ThreadRun>("runIdTest_" + runId, threadId, "", RunStatus.Completed,
                                                                 InstanceHelper.CreateInstance<RunError>("", "")
                                                                 , "", "", new List<ToolDefinition>(),
                                                                 new List<string>(), DateTimeOffset.Now,
                                                                 DateTimeOffset.Now, DateTimeOffset.Now,
                                                                 DateTimeOffset.Now, DateTimeOffset.Now,
                                                                 DateTimeOffset.Now, new Dictionary<string, string>());
        return await Task.FromResult(threadRun);
    }

    public class InternalMessageTextDetails
    {
        public string Text { get; }
        public List<MessageTextAnnotation> Annotations { get; }

        public InternalMessageTextDetails(string text, List<MessageTextAnnotation> annotations)
        {
            Text = text;
            Annotations = annotations;
        }
    }

    public async Task<ThreadMessage?> CreateMessage(string threadId, string content)
    {
        // TODO: ERROR
        var x = InstanceHelper.CreateInstance<MessageTextContent>();

        var threadMessage = InstanceHelper.CreateInstance<ThreadMessage>("messageIdTest_" + Guid.NewGuid(),
                                                                         DateTimeOffset.Now, threadId,
                                                                         MessageRole.User,
                                                                         new List<MessageTextContent>() { x },
                                                                         new List<string>(),
                                                                         new Dictionary<string, string>());
        return await Task.FromResult(threadMessage);
    }

    public async Task<ThreadMessage?> GetMessageAsync(string threadId, string runId)
    {
        // TODO: ERROR
        var x = InstanceHelper.CreateInstance<MessageTextContent>();

        var threadMessage = InstanceHelper.CreateInstance<ThreadMessage>("messageIdTest_" + Guid.NewGuid(),
                                                                         DateTimeOffset.Now, threadId,
                                                                         MessageRole.Assistant,
                                                                         new List<MessageTextContent>() { x },
                                                                         new List<string>(),
                                                                         new Dictionary<string, string>());
        return await Task.FromResult(threadMessage);
    }
}