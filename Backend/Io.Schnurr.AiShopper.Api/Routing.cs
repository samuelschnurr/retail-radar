using Io.Schnurr.AiShopper.Api.TestEndpoints;
using Io.Schnurr.AiShopper.Api.Utils;

namespace Io.Schnurr.AiShopper.Api;

internal static class Routing
{
    internal static void MapRoutes(this WebApplication app)
    {
        if (StartupHelper.IsStartedWithTestData())
        {
            ThreadTest.MapRoutes(app);
            MessageTest.MapRoutes(app);
        }
        else
        {
            Endpoints.Thread.MapRoutes(app);
            Endpoints.Message.MapRoutes(app);
        }
    }
}
