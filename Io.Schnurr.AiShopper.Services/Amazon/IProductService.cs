
namespace Io.Schnurr.AiShopper.Services.Amazon;

public interface IProductService
{
    Task<string> GetStringWithProductLinks(string content);
}