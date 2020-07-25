import React from "react";
import s from "./Employee.module.css";
import { useEmployees } from "../../../state/employees";

const Employee = ({ name, id }) => {
  const { deleteEmployee } = useEmployees();

  return (
    <div className={s.employeeName}>
      {name}
      <button onClick={() => deleteEmployee(id)}>DELETE</button>
    </div>
  );
};
export default Employee;
