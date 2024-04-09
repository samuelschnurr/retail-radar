namespace Io.Schnurr.AiShopper.Api.Utils;

using Io.Schnurr.AiShopper.Services.Amazon;
using Io.Schnurr.AiShopper.Services.OpenAi;
using Microsoft.Extensions.DependencyInjection;

internal static class StartupHelper
{
    internal static void AddCustomServices(this IServiceCollection services)
    {
        string? useThirdPartyEnvironmentVariable = Environment.GetEnvironmentVariable("USE_THIRD_PARTY");
        _ = bool.TryParse(useThirdPartyEnvironmentVariable, out bool useThirdParty);

        if (useThirdParty)
        {
            services.AddSingleton<IAssistantService, AssistantService>();
            services.AddSingleton<IProductService, ProductService>();
        }
        else
        {
            services.AddSingleton<IAssistantService, AssistantTestDataService>();
            services.AddSingleton<IProductService, ProductTestDataService>();
        }
    }
}