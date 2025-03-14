using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Pixagram.Application;
using Pixagram.Infrastructure;
using Pixagram.Infrastructure.Persistence;

var builder = WebApplication.CreateBuilder(args);

// ✅ Add application & infrastructure services
builder.Services.AddInfrastructure(builder.Configuration);
//builder.Services.AddApplication();

// ✅ Add controllers
builder.Services.AddControllers();

// ✅ Enable OpenAPI (Swagger) support
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();

// ✅ Enable CORS for frontend communication (modify as needed)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://pixagram.tungstenz.online") // Change to your Next.js URL
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});


var app = builder.Build();

// ✅ Enable CORS
app.UseCors("AllowFrontend");

// ✅ Configure middleware pipeline
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();  // Enables OpenAPI/Swagger in dev mode
}

app.UseHttpsRedirection();
app.UseSwaggerUI(o => o.SwaggerEndpoint("/openapi/v1.json", "Swagger Demo"));
app.UseAuthorization();
app.MapControllers();

app.Run();




