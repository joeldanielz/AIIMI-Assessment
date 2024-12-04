using aiimi.employee.directory.api.BusinessLayer.DTOs;
using aiimi.employee.directory.api.BusinessLayer.Services;

namespace aiimi.employee.directory.api.tests.ServiceTests
{
    public class EmployeeDataServiceTests
    {
        private readonly EmployeeDataService _employeeDataService;

        public EmployeeDataServiceTests()
        {
            // Initialize the service with a test file path
            _employeeDataService = new EmployeeDataService
            {
                FilePath = "./TestEmployees.csv"
            };
        }

        [Fact]
        public async Task GetAllEmployees_ReturnsEmployees()
        {
            // Arrange
            var mockCsvData = "FirstName,LastName,JobTitle,Phone,Email\n" +
                              "Joel,Danielz,Full Stack Developer,07983808138,joel@joeldanielz.net\n" +
                              "NotJoel,NotDanielz,Empty Stack Developer,83180838970,notjoel@notjoeldanielz.net,\n";

            File.WriteAllText(_employeeDataService.FilePath, mockCsvData);

            // Act
            var result = await _employeeDataService.GetAllEmployees();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count);
            Assert.Equal("Joel", result[0].FirstName);
            Assert.Equal("NotJoel", result[1].FirstName);
        }

        [Fact]
        public async Task GetAllEmployees_ThrowsFileNotFoundException()
        {
            // Arrange
            _employeeDataService.FilePath = "./NonExistentFile.csv";

            // Act & Assert
            await Assert.ThrowsAsync<FileNotFoundException>(() => _employeeDataService.GetAllEmployees());
        }

        [Fact]
        public async Task AddEmployee_WritesToFile()
        {
            // Arrange
            var newEmployee = new EmployeeDto
            {
                FirstName = "Joel",
                LastName = "Danielz",
                JobTitle = "Full Stack Developer",
                Email = "joel@joeldanielz.net",
                Phone = "07983808138"
            };

            // Act
            var mockCsvData = "FirstName,LastName,JobTitle,Email,Phone\n";
            File.WriteAllText(_employeeDataService.FilePath, mockCsvData);

            var result = await _employeeDataService.AddEmployee(newEmployee);

            // Read back from the file to verify
            var csvData = File.ReadAllText(_employeeDataService.FilePath);
            var isEmployeeAdded = csvData.Contains("Joel,Danielz,Full Stack Developer,07983808138,joel@joeldanielz.net");

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Joel", result.FirstName);
            Assert.True(isEmployeeAdded);
        }

        [Fact]
        public async Task AddEmployee_ThrowsIOException()
        {
            // Arrange
            _employeeDataService.FilePath = "./InvalidPath/Employees.csv"; // Invalid path to simulate write error

            var newEmployee = new EmployeeDto
            {
                FirstName = "Joel",
                LastName = "Danielz",
                JobTitle = "Full Stack Developer",
                Phone = "07983808138",
                Email = "joel@joeldanielz.net"
            };

            // Act & Assert
            await Assert.ThrowsAsync<IOException>(() => _employeeDataService.AddEmployee(newEmployee));
        }
    }
}
