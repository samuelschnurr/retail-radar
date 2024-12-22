namespace Io.Schnurr.RetailRadar.Backend.Api.Middlewares;

internal class ResponseDelayInterceptor(RequestDelegate next)
{
    private readonly RequestDelegate next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        await next(context);
        await ResponseDelay();
    }

    private static class RandomNumberGenerator
    {
        private static readonly Random random = new();

        public static int GenerateRandomNumber(int minValue, int maxValue)
        {
            return random.Next(minValue, maxValue + 1);
        }
    }

    private static async Task ResponseDelay()
    {
        var delay = RandomNumberGenerator.GenerateRandomNumber(1500, 3000);
        await Task.Delay(delay);
    }
}