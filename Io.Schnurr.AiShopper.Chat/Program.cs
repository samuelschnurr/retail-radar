using Io.Schnurr.AiShopper.Services;
using Microsoft.Extensions.Configuration;

internal class Program
{
    static IConfigurationBuilder configurationBuilder = new ConfigurationBuilder().AddUserSecrets<Program>();
    static IConfiguration configuration = configurationBuilder.Build();

    private static void Main(string[] args)
    {
        try
        {
            var shoppingService = new ShoppingService();
            shoppingService.InitShopping().Wait();

            //var productService = new ProductService(configuration);
            //var amazonLink = productService.FindAmazonLinkForSearchTerm(searchTerm).Result;
            //Console.WriteLine("Der Amazonlink zu einem passenden Produkt ist:");
            //Console.WriteLine(amazonLink);
        }
        catch (Exception ex)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(ex.Message);
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}