import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, selectEmployees } from "./employeesSlice";
import Employee from "./Employee";
import { useEffect } from "react";
import { AppDispatch } from "../../store";
import '../../styles/EmployeeList.scss'

const EmployeeList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedEmployees, loading, error } = useSelector(selectEmployees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  
  return (
    <div className="Employee-List-Container">
      {loading && <p className="Employee-List-Loading">Loading...</p>}
      {error && <p className="Employee-List-Error">{error}</p>}
      {selectedEmployees.map((employee, index) => (
        <Employee key={`employee-${index}`} employee={employee}></Employee>
      ))}
    </div>
  );
};

export default EmployeeList;
