import React, { useState } from "react";
import s from "./NewEmployee.module.css";
import { useEmployees } from "../../../state/employees";

const NewEmployees = () => {
  const { addEmployee } = useEmployees();
  const [value, setValue] = useState("");

  const handleOnClick = () => {
    if (!value) {
      return;
    }
    addEmployee(value);
    setValue("");
  };

  return (
    <div className={s.addEmployee}>
      <p>Add an employee:</p>
      <input
        type={"text"}
        placeholder={"Name"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleOnClick}>ADD</button>
    </div>
  );
};

export default NewEmployees;
