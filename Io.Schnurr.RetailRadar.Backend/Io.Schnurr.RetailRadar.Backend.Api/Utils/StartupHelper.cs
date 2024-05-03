namespace Io.Schnurr.RetailRadar.Backend.Api.Utils;

using Io.Schnurr.RetailRadar.Backend.Api.Middlewares;
using Io.Schnurr.RetailRadar.Backend.Services.Amazon;
using Io.Schnurr.RetailRadar.Backend.Services.OpenAi;
using Microsoft.Extensions.DependencyInjection;

internal static class StartupHelper
{
    internal static void AddCustomServices(this IServiceCollection services)
    {
        services.AddSingleton<AssistantService>();
        services.AddSingleton<ProductService>();
    }

    internal static void AddCustomMiddleware(this WebApplication app)
    {
        if (IsStartedWithTestData())
        {
            app.UseMiddleware<ResponseDelayInterceptor>();
        }
    }

    internal static bool IsStartedWithTestData()
    {
        string? useTestDataEnvironmentVariable = Environment.GetEnvironmentVariable("USE_TEST_DATA");
        _ = bool.TryParse(useTestDataEnvironmentVariable, out bool useTestData);

        return useTestData;
    }
}