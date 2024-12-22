namespace Io.Schnurr.RetailRadar.Backend.Services.Product;

internal class ProductSearchResult
{
    internal string? SearchTerm { get; set; }
    internal string? Asin { get; set; }
    internal string? BaseAddress { get; set; }
    internal string? AffiliateId { get; set; }
    internal string? ImageSource { get; set; } = "{amazonLogo}";


    internal bool IsValid()
    {
        return
            !string.IsNullOrWhiteSpace(SearchTerm)
            && !string.IsNullOrWhiteSpace(Asin)
            && !string.IsNullOrWhiteSpace(BaseAddress)
            && !string.IsNullOrWhiteSpace(AffiliateId);
    }
}
