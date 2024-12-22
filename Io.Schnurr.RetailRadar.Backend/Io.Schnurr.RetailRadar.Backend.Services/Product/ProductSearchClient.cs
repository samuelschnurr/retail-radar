using Google.Apis.CustomSearchAPI.v1;
using Google.Apis.CustomSearchAPI.v1.Data;
using Microsoft.Extensions.Logging;
using static Google.Apis.CustomSearchAPI.v1.CseResource;

namespace Io.Schnurr.RetailRadar.Backend.Services.Product;

internal class ProductSearchClient(ILogger logger, string authorization, string engineId) : CustomSearchAPIService(new() { ApiKey = authorization })
{
    internal static string CreateQueryString(Dictionary<string, string> parameters) => string.Join("&", parameters.Select(p => $"{p.Key}={p.Value}"));

    internal async Task<List<Result>?> GetProductSearchResults(string searchTerm, string region)
    {
        var searchRequest = GetProductSearchRequest(searchTerm, region);

        try
        {
            var searchResponse = await searchRequest.ExecuteAsync();
            return searchResponse?.Items?.ToList();
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Error while executing searchRequest for {NamofSearchTerm} '{SearchTerm}'.", nameof(searchTerm), searchTerm);
            return null;
        }
    }

    private ListRequest GetProductSearchRequest(string searchTerm, string region)
    {
        ListRequest listRequest = Cse.List();

        // Needs to be set, to avoid per user limit on serverside.
        listRequest.QuotaUser = Guid.NewGuid().ToString();

        listRequest.Cx = engineId;
        listRequest.Q = $"intext:'{searchTerm}' site:'*.amazon{region}' inurl:'/dp/'";

        return listRequest;
    }
}
