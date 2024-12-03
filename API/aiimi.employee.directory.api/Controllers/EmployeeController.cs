using aiimi.employee.directory.api.BusinessLayer.DTOs;
using aiimi.employee.directory.api.BusinessLayer.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace aiimi.employee.directory.api.Controllers
{
    /// <summary>
    /// API controller for managing employee data.
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        /// <summary>
        /// The logger used for logging messages.
        /// </summary>
        private readonly ILogger<EmployeeController> _logger;

        /// <summary>
        /// The employee data service.
        /// </summary>
        private readonly IEmployeeDataService _employeeDataService;

        /// <summary>
        /// The mapper.
        /// </summary>
        private readonly IMapper _mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="EmployeeController"/> class.
        /// </summary>
        /// <param name="logger">The logger instance.</param>
        /// <param name="mapper">The mapper instance.</param>
        /// <param name="employeeDataService">The employee data service instance.</param>
        public EmployeeController(
            ILogger<EmployeeController> logger,
            IEmployeeDataService employeeDataService,
            IMapper mapper)
        {
            _logger = logger;
            _employeeDataService = employeeDataService;
            _mapper = mapper;
        }

        /// <summary>
        /// Retrieves a collection of employees.
        /// </summary>
        /// <returns>An enumerable collection of <see cref="EmployeeRequestDto"/> objects.</returns>
        /// <exception cref="NotImplementedException">Thrown when the method is not implemented.</exception>
        [HttpGet]
        public async Task<IEnumerable<EmployeeRequestDto>> Get()
        {
            var employees = await this._employeeDataService.GetAllEmployees().ConfigureAwait(false);

            return this._mapper.Map<List<EmployeeRequestDto>>(employees);
        }

        /// <summary>
        /// Creates new employee records.
        /// </summary>
        /// <returns>An enumerable collection of newly created <see cref="EmployeeRequestDto"/> objects.</returns>
        /// <exception cref="NotImplementedException">Thrown when the method is not implemented.</exception>
        [HttpPost]
        public async Task<IActionResult> Create(EmployeeRequestDto employee)
        {
            await this._employeeDataService.AddEmployee(this._mapper.Map<EmployeeDto>(employee)).ConfigureAwait(false);
        }
    }
}
