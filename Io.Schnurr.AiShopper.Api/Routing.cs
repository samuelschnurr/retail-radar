using Io.Schnurr.AiShopper.Api.Endpoints;

namespace Io.Schnurr.AiShopper.Api;

internal static class Routing
{
    internal static void MapRoutes(this WebApplication app)
    {
        Endpoints.Thread.MapRoutes(app);
        Message.MapRoutes(app);
    }
}
