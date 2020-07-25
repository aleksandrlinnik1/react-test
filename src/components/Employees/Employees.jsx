import React from "react";
import s from "./Employees.module.css";
import Employee from "./Employee/Employee";
import NewEmployee from "./NewEmpoloyee/NewEmployee";
import { useEmployees } from "../../state/employees";

const Employees = () => {
  const { employees } = useEmployees();

  return (
    <div className={s.employees}>
      <NewEmployee />
      {employees.map(({ id, first_name }) => (
        <Employee key={id} id={id} name={first_name} />
      ))}
    </div>
  );
};

export default Employees;
