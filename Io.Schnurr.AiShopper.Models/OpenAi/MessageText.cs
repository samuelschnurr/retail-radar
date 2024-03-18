namespace Io.Schnurr.AiShopper.Models.OpenAi;

using System.Collections.Generic;

public class MessageText
{
    public required string Value { get; set; }
    public List<object>? Annotations { get; set; }
}