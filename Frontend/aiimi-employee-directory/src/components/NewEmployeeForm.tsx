import { useState } from "react";
import { addEmployee } from "./employee-list/employeesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import '../styles/NewEmployeeForm.scss'

const NewEmployeeForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    email: "",
  });
  // dispatch(addEmployee({firstName: "joel", lastName: "danielz", jobTitle: "dev", phone: "07983808138", email: "joedanielz@hotmail.com"})); // Dispatch the `add` action

  const handleCreateEmployee = () => {
    dispatch(addEmployee(newEmployee));
  };

  return (
    <div className="Employee-Form-Container">
      <input
        type="text"
        placeholder="First Name"
        style={{width: "40%"}}
        className="Employee-Form-Text-Input"
        value={newEmployee.firstName}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, firstName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        style={{width: "40%"}}
        className="Employee-Form-Text-Input"
        value={newEmployee.lastName}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, lastName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Job Title"
        style={{width: "30%"}}
        className="Employee-Form-Text-Input"
        value={newEmployee.jobTitle}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, jobTitle: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Phone"
        style={{width: "30%"}}
        className="Employee-Form-Text-Input"
        value={newEmployee.phone}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, phone: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        style={{width: "30%"}}
        className="Employee-Form-Text-Input"
        value={newEmployee.email}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, email: e.target.value })
        }
      />
      <button className="Employee-Form-Button" onClick={handleCreateEmployee}>Create</button>
    </div>
  );
};

export default NewEmployeeForm;
