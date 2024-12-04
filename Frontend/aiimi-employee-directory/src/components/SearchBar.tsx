import { useEffect, useState } from "react";
import "../styles/SearchBar.scss";
import {
  clearFilterEmployees,
  fetchEmployees,
  filterEmployees,
  selectEmployees,
} from "./employee-list/employeesSlice";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import FilteredEmployees from "./FilteredEmployees";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchString, setSearchString] = useState("");

  function searchEmployees(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 2) {
      dispatch(filterEmployees(e.target.value));
    } else {
      dispatch(clearFilterEmployees());
    }
  }

  return (
    <div className="Search-Bar-Container">
      <input
        className="Search-Bar-Input"
        type="text"
        placeholder="Search for a user..."
        onChange={(e) => {
          searchEmployees(e);
        }}
      />
      <button className="Search-Bar-Button">Go!</button>
    </div>
  );
};

export default SearchBar;
