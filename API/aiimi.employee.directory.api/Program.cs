using aiimi.employee.directory.api.BusinessLayer.Interfaces;
using aiimi.employee.directory.api.BusinessLayer.Services;
using aiimi.employee.directory.api.Core;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Dependency Injection
builder.Services.AddSingleton<IEmployeeDataService, EmployeeDataService>();
builder.Services.AddAutoMapper(x => x.AddProfile(new MappingProfile()));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontEnd",
        policy => policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod());
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontEnd");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
