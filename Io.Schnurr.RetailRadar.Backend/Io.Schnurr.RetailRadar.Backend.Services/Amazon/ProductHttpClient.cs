namespace Io.Schnurr.RetailRadar.Backend.Services.Amazon;

internal class ProductHttpClient : HttpClient
{
    public ProductHttpClient(string baseAddress)
    {
        BaseAddress = new Uri(baseAddress);
    }

    internal static string CreateQueryString(Dictionary<string, string> parameters) => string.Join("&", parameters.Select(p => $"{p.Key}={p.Value}"));

    internal static string GetProductSearchUrl(string searchTerm)
    {
        var amazonSearchPath = "s";

        var parameters = new Dictionary<string, string>
        {
            { "k", searchTerm },
        };

        string url = $"{amazonSearchPath}?{CreateQueryString(parameters)}";

        return url;
    }
}
