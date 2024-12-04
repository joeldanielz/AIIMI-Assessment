import "../../styles/Employee.scss";
import { EmployeeDTO } from "../../types/EmployeeDTO";

interface EmployeeProps {
  employee: EmployeeDTO;
}

const Employee = (props: EmployeeProps) => {
  return (
    <div className="Employee-Container">
      <p>
        {props.employee.firstName} {props.employee.lastName}
      </p>
      <p>
        {props.employee.jobTitle}
      </p>
      <p>
        {props.employee.phone}
      </p>
			
      <p>
        {props.employee.email}
      </p>
    </div>
  );
};

export default Employee;
