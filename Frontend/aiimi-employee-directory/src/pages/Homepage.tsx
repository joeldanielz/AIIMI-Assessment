import { useDispatch } from "react-redux";
import EmployeeList from "../components/employee-list/EmployeeList";
import SearchBar from "../components/SearchBar";
import "../styles/Homepage.scss";
import { addEmployee } from "../components/employee-list/employeesSlice";
import { AppDispatch } from "../store";
import NewEmployeeForm from "../components/NewEmployeeForm";
import { useState } from "react";
import FilteredEmployees from "../components/FilteredEmployees";

// Probably have some sort of useEffect here and retrieve the list of components.

const Homepage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    // Container for overall layout
    <div className="Container">
      {/* Section for narrower layout. */}
      <div className="Section">
        <SearchBar />
        <FilteredEmployees />
        <EmployeeList />
        {isFormVisible ? (
          <NewEmployeeForm setIsFormVisible={setIsFormVisible} />
        ) : (
          <></>
        )}
        <button
          className="New-User-Button"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {!isFormVisible ? <>New User +</> : <>Close Form</>}
        </button>
      </div>
    </div>
  );
};

export default Homepage;
