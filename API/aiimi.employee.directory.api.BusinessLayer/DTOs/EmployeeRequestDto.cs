namespace aiimi.employee.directory.api.BusinessLayer.DTOs
{
    /// <summary>
    /// Represents a request for employee data in the Employee Directory API.
    /// </summary>
    public class EmployeeDto
    {
        /// <summary>
        /// Gets or sets the first name of the employee.
        /// </summary>
        public string? FirstName { get; set; }

        /// <summary>
        /// Gets or sets the last name of the employee.
        /// </summary>
        public string? LastName { get; set; }

        /// <summary>
        /// Gets or sets the job title of the employee.
        /// </summary>
        public string? JobTitle { get; set; }

        /// <summary>
        /// Gets or sets the phone number of the employee.
        /// </summary>
        public string? Phone { get; set; }

        /// <summary>
        /// Gets or sets the email address of the employee.
        /// </summary>
        public string? Email { get; set; }
    }
}