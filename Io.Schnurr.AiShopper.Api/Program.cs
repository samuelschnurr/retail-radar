using Io.Schnurr.AiShopper.Api;
using Io.Schnurr.AiShopper.OpenAi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<AssistantService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(builder => builder
    .WithOrigins(app.Configuration["AllowSpecificOrigins"]?.Split(";") ?? throw new Exception("Allowed origins not found"))
    .AllowAnyMethod()
    .AllowAnyHeader());
}

app.UseHttpsRedirection();

app.MapRoutes();

app.Run();