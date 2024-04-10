namespace Io.Schnurr.AiShopper.Api.Middleware;


internal class ResponseDelayInterceptor
{
    private readonly RequestDelegate next;

    public ResponseDelayInterceptor(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task Invoke(HttpContext context)
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