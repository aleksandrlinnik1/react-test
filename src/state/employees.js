import React, { createContext, useContext, useEffect, useState } from "react";

export const EmployeesContext = createContext({});

export const useEmployees = () => useContext(EmployeesContext);

const randId = () => Math.random().toString(36).substr(2, 9);

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const addEmployee = (first_name) => {
    setEmployees((prev) => [
      {
        id: randId(),
        first_name,
        email: "",
        last_name: "",
        avatar: "",
      },
      ...prev,
    ]);
  };

  const value = { employees, deleteEmployee, addEmployee };

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((r) => r.json())
      .then(({ data }) => setEmployees(data));
  }, []);

  return (
    <EmployeesContext.Provider value={value}>
      {children}
    </EmployeesContext.Provider>
  );
};
