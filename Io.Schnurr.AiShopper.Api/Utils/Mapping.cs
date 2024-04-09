using System.Text;
using Azure.AI.OpenAI.Assistants;
using Io.Schnurr.AiShopper.Api.Dtos;

namespace Io.Schnurr.AiShopper.Api.Utils;

internal static class Mapping
{
    internal static RunDto MapToRunDto(this ThreadRun threadRun)
    {
        return new RunDto(threadRun.Id, threadRun.Status.ToString());
    }

    internal static MessageDto MapToMessageDto(this ThreadMessage threadMessage, ThreadRun? threadRun = null)
    {
        StringBuilder sb = new();

        foreach (var contentItem in threadMessage.ContentItems)
        {
            if (contentItem is MessageTextContent textItem)
            {
                sb.AppendLine(textItem.Text);
                sb.AppendLine();
            }
        }

        RunDto? runDto = threadRun?.MapToRunDto();
        return new MessageDto(threadMessage.Id, threadMessage.ThreadId, sb.ToString(), threadMessage.Role.ToString(), runDto);
    }
}
