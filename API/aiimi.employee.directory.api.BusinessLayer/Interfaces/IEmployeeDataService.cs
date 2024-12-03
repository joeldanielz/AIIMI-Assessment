using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using aiimi.employee.directory.api.BusinessLayer.DTOs;

namespace aiimi.employee.directory.api.BusinessLayer.Interfaces
{
    /// <summary>
    /// The employee data service interface.
    /// </summary>
    public interface IEmployeeDataService
    {
        /// <summary>
        /// Gets all employees.
        /// </summary>
        /// <returns></returns>
        Task<List<EmployeeDto>> GetAllEmployees();

        /// <summary>
        /// Adds an employee to memory.
        /// </summary>
        /// <param name="employee">The employee.</param>
        /// <returns>The <see cref="Task"/></returns>
        Task AddEmployee(EmployeeDto employee);
    }
}