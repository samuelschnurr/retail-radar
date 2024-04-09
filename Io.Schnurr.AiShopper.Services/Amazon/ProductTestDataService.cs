using System.Text.RegularExpressions;

namespace Io.Schnurr.AiShopper.Services.Amazon;

public class ProductTestDataService : IProductService
{
    private readonly string productNameRegexPattern = new(@"\[#(.*?)#\]");

    public async Task<string> GetStringWithProductLinks(string content)
    {
        MatchCollection matches = Regex.Matches(content, productNameRegexPattern);

        var result = content;

        for (int i = 0; i < matches.Count; i++)
        {
            Match match = matches[i];
            var productLink = "{productLinkFor:" + match.Groups[1].Value + "}";
            result = result.Replace(match.Value, productLink);
        }

        return await Task.FromResult(result);
    }
}