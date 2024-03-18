using Io.Schnurr.AiShopper.Services;

internal class Program
{
    //static IConfigurationBuilder configurationBuilder = new ConfigurationBuilder().AddUserSecrets<Program>();
    //static IConfiguration configuration = configurationBuilder.Build();

    private static void Main(string[] args)
    {
        try
        {
            var chat = new ShoppingChat();
            chat.Start().Wait();
            var welcomeMessage = chat.GetWelcomeMessage().Result;

            Console.WriteLine(welcomeMessage);
            Console.WriteLine();

            string userInput;

            while ((userInput = Console.ReadLine()?.ToLower()) != "exit")
            {
                chat.SendMessage(userInput!).Wait();
                var newResponse = chat.GetMessage().Result;

                Console.WriteLine();
                Console.WriteLine(newResponse);
            }

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