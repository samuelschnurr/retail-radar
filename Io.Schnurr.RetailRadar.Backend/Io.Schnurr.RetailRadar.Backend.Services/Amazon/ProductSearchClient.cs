using System.Diagnostics;
using Google.Apis.CustomSearchAPI.v1;
using Google.Apis.CustomSearchAPI.v1.Data;
using static Google.Apis.CustomSearchAPI.v1.CseResource;

namespace Io.Schnurr.RetailRadar.Backend.Services.Amazon;

internal class ProductSearchClient(string authorization, string engineId) : CustomSearchAPIService(new() { ApiKey = authorization })
{
    internal static string CreateQueryString(Dictionary<string, string> parameters) => string.Join("&", parameters.Select(p => $"{p.Key}={p.Value}"));

    internal async Task<List<Result>?> GetProductSearchResults(string searchTerm)
    {
        var searchRequest = GetProductSearchRequest(searchTerm);

        try
        {
            var searchResponse = await searchRequest.ExecuteAsync();
            return searchResponse?.Items?.ToList();
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error while executing searchRequest for {nameof(searchTerm)} '{searchTerm}'. With message: {ex.ToString()}");
            return null;
        }
    }

    private ListRequest GetProductSearchRequest(string searchTerm)
    {
        ListRequest listRequest = Cse.List();

        // Needs to be set, to avoid per user limit on serverside.
        listRequest.QuotaUser = Guid.NewGuid().ToString();

        listRequest.Cx = engineId;
        listRequest.Q = searchTerm;

        return listRequest;
    }
}
