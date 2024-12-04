import { useState } from "react";

const NewEmployeeForm = () => {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    email: "",
  });
  // dispatch(addEmployee({firstName: "joel", lastName: "danielz", jobTitle: "dev", phone: "07983808138", email: "joedanielz@hotmail.com"})); // Dispatch the `add` action

  return <div>Hello!</div>;
};

export default NewEmployeeForm;
