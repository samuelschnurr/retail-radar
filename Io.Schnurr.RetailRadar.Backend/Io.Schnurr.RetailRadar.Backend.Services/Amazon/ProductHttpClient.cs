using System.Net;

namespace Io.Schnurr.RetailRadar.Backend.Services.Amazon;

internal class ProductHttpClient : HttpClient
{
    static readonly HttpClientHandler httpHandler = new() { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate };

    public ProductHttpClient(string baseAddress) : base(httpHandler)
    {
        BaseAddress = new Uri(baseAddress);
    }

    internal static string CreateQueryString(Dictionary<string, string> parameters) => string.Join("&", parameters.Select(p => $"{p.Key}={p.Value}"));

    internal string GetProductSearchUrl(string searchTerm)
    {
        var amazonSearchPath = "s";

        var parameters = new Dictionary<string, string>
        {
            { "k", searchTerm },
        };

        string url = $"{amazonSearchPath}?{CreateQueryString(parameters).Replace(" ", "+")}";

        return url;
    }
}
