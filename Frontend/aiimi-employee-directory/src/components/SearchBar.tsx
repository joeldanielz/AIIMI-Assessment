import { useEffect } from "react";
import "../styles/SearchBar.scss";
import { fetchEmployees } from "./employee-list/employeesSlice";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  function searchEmployees() {
    console.log("Getting employees");
    dispatch(fetchEmployees());
  }

  return (
    <div className="Search-Bar-Container">
      <input
        className="Search-Bar-Input"
        type="text"
        placeholder="Search for a user..."
      />
      <button onClick={searchEmployees} className="Search-Bar-Button">Go!</button>
    </div>
  );
};

export default SearchBar;
