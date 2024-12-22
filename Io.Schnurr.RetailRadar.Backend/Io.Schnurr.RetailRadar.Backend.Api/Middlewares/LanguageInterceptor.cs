namespace Io.Schnurr.RetailRadar.Backend.Api.Middlewares;

using System.Globalization;

internal class LanguageInterceptor(RequestDelegate next)
{
    private readonly RequestDelegate next = next;


    public async Task InvokeAsync(HttpContext context)
    {
        string? languageHeader = context.Request.Headers.AcceptLanguage.FirstOrDefault();

        if (!string.IsNullOrEmpty(languageHeader))
        {
            try
            {
                var culture = new CultureInfo(languageHeader);
                Thread.CurrentThread.CurrentCulture = culture;
                Thread.CurrentThread.CurrentUICulture = culture;
            }
            catch (CultureNotFoundException)
            {
                var fallbackCulture = new CultureInfo("en");
                Thread.CurrentThread.CurrentCulture = fallbackCulture;
                Thread.CurrentThread.CurrentUICulture = fallbackCulture;
            }
        }

        await next(context);
    }
}
