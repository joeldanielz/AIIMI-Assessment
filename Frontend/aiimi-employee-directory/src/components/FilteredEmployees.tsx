import {
  filterEmployees,
  selectEmployee,
  selectEmployees,
} from "./employee-list/employeesSlice";
import "../styles/FilteredEmployees.scss";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeDTO } from "../types/EmployeeDTO";
import { AppDispatch } from "../store";

const FilteredEmployees = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredEmployees } = useSelector(selectEmployees);

  function selectEmployeeFromList(employee: EmployeeDTO) {
    dispatch(selectEmployee(employee));
  }

  return (
    <div className="Filtered-Employee-Container">
      {filteredEmployees.map((employee, index) => (
        <p onClick={(e) => selectEmployeeFromList(employee)} className="Filtered-Employee-Option">{employee.firstName} {employee.lastName}</p>
      ))}
    </div>
  );
};

export default FilteredEmployees;
