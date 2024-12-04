using aiimi.employee.directory.api.BusinessLayer.DTOs;
using AutoMapper;

namespace aiimi.employee.directory.api.Core
{
    /// <summary>
    /// The Mapping Profile.
    /// </summary>
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<EmployeeRequestDto, EmployeeDto>().ReverseMap();
        }
    }
}
