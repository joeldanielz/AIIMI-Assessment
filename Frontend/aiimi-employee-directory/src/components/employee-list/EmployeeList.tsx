import { useSelector } from "react-redux";
import { selectEmployees } from "./employeesSlice";
import Employee from "./Employee";
import '../../styles/EmployeeList.scss'

const EmployeeList = () => {
  const { employees, loading, error } = useSelector(selectEmployees);
  return (
    <div className="Employee-List-Container">
      {employees.map((employee, index) => (
        <Employee key={`employee-${index}`} employee={employee}></Employee>
      ))}
    </div>
  );
};

export default EmployeeList;
