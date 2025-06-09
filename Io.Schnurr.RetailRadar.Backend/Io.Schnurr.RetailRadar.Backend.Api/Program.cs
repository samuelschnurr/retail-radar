using Io.Schnurr.RetailRadar.Backend.Api;
using Io.Schnurr.RetailRadar.Backend.Api.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCustomServices();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(builder => builder
    .WithOrigins(app.Configuration["AllowSpecificOrigins"]?.Split(";") ?? throw new KeyNotFoundException("Allowed origins not found"))
    .AllowAnyMethod()
    .AllowAnyHeader());
}

app.AddCustomMiddleware();

app.UseHttpsRedirection();

app.MapRoutes();

app.Run();