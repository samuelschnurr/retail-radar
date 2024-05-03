using Io.Schnurr.RetailRadar.Backend.Api.Endpoints;
using Io.Schnurr.RetailRadar.Backend.Api.TestEndpoints;
using Io.Schnurr.RetailRadar.Backend.Api.Utils;

namespace Io.Schnurr.RetailRadar.Backend.Api;

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
            Message.MapRoutes(app);
        }
    }
}
