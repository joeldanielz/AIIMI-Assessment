import { useState } from "react";
import { addEmployee } from "./employee-list/employeesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import "../styles/NewEmployeeForm.scss";
import { showToast } from "./toast/toastSlice";

interface NewEmployeeFormProps {
  setIsFormVisible: (isFormVisible: boolean) => void;
}

const NewEmployeeForm = (props: NewEmployeeFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const defaultEmployee = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    email: "",
  };

  const [newEmployee, setNewEmployee] = useState(defaultEmployee);
  const [errors, setErrors] = useState({ email: "", phone: "" }); // Validation errors

  const validateEmailAddress = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const ukPhoneRegex =
      /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(020\s?\d{4}\s?\d{4}|01[2-9]\d{1,2}\s?\d{5,6}|0800\s?\d{6})$/;
    return ukPhoneRegex.test(phone);
  };

  const handleCreateEmployee = () => {
    const emailAddressValid = validateEmailAddress(newEmployee.email);
    const phoneNumberValid = validatePhoneNumber(newEmployee.phone);

    if (!emailAddressValid || !phoneNumberValid) {
      setErrors({
        email: emailAddressValid ? "" : "Invalid email address.",
        phone: phoneNumberValid ? "" : "Invalid phone number.",
      });
      return;
    }

    setErrors({ email: "", phone: "" });
    dispatch(addEmployee(newEmployee)).then(() => {
      dispatch(showToast("New user added!"));
    });

    setNewEmployee(defaultEmployee);
    props.setIsFormVisible(false);
  };

  return (
    <div className="Employee-Form-Container">
      <input
        type="text"
        placeholder="First Name"
        style={{ width: "40%" }}
        className="Employee-Form-Text-Input"
        value={newEmployee.firstName}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, firstName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        style={{ width: "40%" }}
        className="Employee-Form-Text-Input"
        value={newEmployee.lastName}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, lastName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Job Title"
        style={{ width: "30%" }}
        className="Employee-Form-Text-Input"
        value={newEmployee.jobTitle}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, jobTitle: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Phone"
        style={{ width: "30%" }}
        className="Employee-Form-Text-Input"
        value={newEmployee.phone}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, phone: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        style={{ width: "30%" }}
        className="Employee-Form-Text-Input"
        value={newEmployee.email}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, email: e.target.value })
        }
      />
      <button className="Employee-Form-Button" onClick={handleCreateEmployee}>
        Create
      </button>
      <div className="Error-Message-Container">
        {errors.email && <p className="Error-Message">{errors.email}</p>}{" "}
        {errors.phone && <p className="Error-Message">{errors.phone}</p>}{" "}
      </div>
    </div>
  );
};

export default NewEmployeeForm;
