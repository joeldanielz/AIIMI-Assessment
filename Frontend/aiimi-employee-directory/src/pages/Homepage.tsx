import { useDispatch } from "react-redux";
import EmployeeList from "../components/employee-list/EmployeeList";
import SearchBar from "../components/SearchBar";
import "../styles/Homepage.scss";
import { addEmployee } from "../components/employee-list/employeesSlice";
import { AppDispatch } from "../store";

// Probably have some sort of useEffect here and retrieve the list of components.

const Homepage = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  function test() {
    dispatch(addEmployee({firstName: "joel", lastName: "danielz", jobTitle: "dev", phone: "07983808138", email: "joedanielz@hotmail.com"})); // Dispatch the `add` action
  }

  return (
    // Container for overall layout
    <div className="Container">
      {/* Section for narrower layout. */}
      <div className="Section">
        <SearchBar />
        <EmployeeList />
        <button onClick={test}>clickme</button>
      </div>
    </div>
  );
};

export default Homepage;
