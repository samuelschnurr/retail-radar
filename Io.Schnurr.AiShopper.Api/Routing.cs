using Io.Schnurr.AiShopper.Api.Services;

namespace Io.Schnurr.AiShopper.Api;

internal static class Routing
{
    internal static void MapRoutes(this WebApplication app)
    {
        Services.Thread.MapRoutes(app);
        Run.MapRoutes(app);
        Message.MapRoutes(app);
    }
}
