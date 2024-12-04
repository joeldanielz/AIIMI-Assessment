using System.Formats.Asn1;
using System.Globalization;
using aiimi.employee.directory.api.BusinessLayer.DTOs;
using aiimi.employee.directory.api.BusinessLayer.Interfaces;
using CsvHelper;

namespace aiimi.employee.directory.api.BusinessLayer.Services
{
    /// <summary>
    /// A service class for managing employee data.
    /// Provides functionality to read and write employee data from/to a CSV file.
    /// Implements the <see cref="IEmployeeDataService"/> interface.
    /// </summary>
    public class EmployeeDataService : IEmployeeDataService
    {
        /// <summary>
        /// Gets or sets the file path of the CSV file containing employee data.
        /// </summary>
        public string FilePath { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="EmployeeDataService"/> class with default settings.
        /// </summary>
        public EmployeeDataService()
        {
            FilePath = "./Assets/InterviewTestData.csv";
        }

        /// <summary>
        /// Retrieves all employee records from the CSV file.
        /// </summary>
        /// <returns>A list of <see cref="EmployeeDto"/> objects representing the employees.</returns>
        /// <exception cref="FileNotFoundException">Thrown if the specified CSV file does not exist.</exception>
        /// <exception cref="Exception">Thrown if there is an issue reading the file or parsing the data.</exception>
        public async Task<List<EmployeeDto>> GetAllEmployees()
        {
            var employees = new List<EmployeeDto>();

            try
            {
                using (var reader = new StreamReader(this.FilePath))
                using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
                {
                    employees = csv.GetRecords<EmployeeDto>().ToList(); // Deserialize CSV records into a list.
                }
            }
            catch (FileNotFoundException ex)
            {
                throw new FileNotFoundException($"File not found at path: {this.FilePath}", ex);
            }
            catch (Exception ex)
            {
                throw new Exception("Error reading or parsing the employee data file.", ex);
            }

            return await Task.FromResult(employees);
        }

        /// <summary>
        /// Adds a new employee record to the CSV file.
        /// </summary>
        /// <param name="employee">The <see cref="EmployeeDto"/> object representing the new employee to add.</param>
        /// <returns>An asynchronous task representing the operation.</returns>
        /// <exception cref="IOException">Thrown if there is an issue writing to the file.</exception>
        public async Task<EmployeeDto> AddEmployee(EmployeeDto employee)
        {
            try
            {
                using (var writer = new StreamWriter(this.FilePath, append: true)) // Open file in append mode.
                using (var csv = new CsvWriter(writer, CultureInfo.InvariantCulture))
                {
                    csv.WriteRecord(employee); // Write the employee record to the CSV file.
                    csv.NextRecord();
                }
            }
            catch (IOException ex)
            {
                throw new IOException("Error writing to the employee data file.", ex);
            }

            return await Task.FromResult(employee);
        }
    }
}
