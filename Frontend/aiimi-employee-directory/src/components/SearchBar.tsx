import { useEffect, useState } from "react";
import "../styles/SearchBar.scss";
import {
  fetchEmployees,
  filterEmployees,
} from "./employee-list/employeesSlice";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchString, setSearchString] = useState("");

  function searchEmployees() {
    console.log("Getting employees");
    dispatch(filterEmployees(searchString));
  }

  return (
    <div className="Search-Bar-Container">
      <input
        className="Search-Bar-Input"
        type="text"
        placeholder="Search for a user..."
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <button onClick={searchEmployees} className="Search-Bar-Button">
        Go!
      </button>
    </div>
  );
};

export default SearchBar;
