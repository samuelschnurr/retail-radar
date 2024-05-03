namespace Io.Schnurr.RetailRadar.Backend.Services.Amazon;

internal class ProductHttpClient : HttpClient
{
    private const string baseAddress = "https://api.asindataapi.com";
    private const string affiliateId = "retaildisc0d8-21";
    private readonly string authorization;
    private readonly Dictionary<string, string> defaultParameters = new()
    {
        { "type", "search" },
        { "amazon_domain", "amazon.de" },
        { "language", "de_DE" },
        { "exclude_sponsored", "true" },
        { "page", "1" },
        { "max_page", "1" },
        { "output", "json" },
        { "include_html", "false" }
    };

    public ProductHttpClient(string authorization)
    {
        BaseAddress = new Uri(baseAddress);
        this.authorization = authorization;
    }

    internal string GetProductSearchUrl(string searchTerm)
    {
        var parameters = new Dictionary<string, string>
        {
            { "api_key", authorization },
            { "associate_id", affiliateId },
            { "tag", affiliateId },
            { "search_term", searchTerm },
        }
        .Union(defaultParameters);

        string queryString = string.Join("&", parameters.Select(p => $"{p.Key}={p.Value}"));
        string url = $"/request?{queryString}";

        return url;
    }
}
