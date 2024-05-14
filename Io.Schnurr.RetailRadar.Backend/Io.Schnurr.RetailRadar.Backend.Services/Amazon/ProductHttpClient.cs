using System.Net;

namespace Io.Schnurr.RetailRadar.Backend.Services.Amazon;

internal class ProductHttpClient : HttpClient
{
    static readonly HttpClientHandler httpHandler = new() { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate };

    public ProductHttpClient(string baseAddress) : base(httpHandler)
    {
        BaseAddress = new Uri(baseAddress);
        SetupDefaultRequestHeader();
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

    private void SetupDefaultRequestHeader()
    {
        DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0");
        DefaultRequestHeaders.Add("Accept-Language", "de,de-DE;q=0.9,en;q=0.8,en-US;q=0.7,en-GB;q=0.6");
        DefaultRequestHeaders.Add("Accept-Encoding", "gzip, deflate, br, zstd");
        DefaultRequestHeaders.Add("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
        DefaultRequestHeaders.Add("Referer", "https://www.google.com/");
    }
}
