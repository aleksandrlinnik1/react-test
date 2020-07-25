import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Employees from "./components/Employees/Employees";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { EmployeesProvider } from "./state/employees";

const App = () => {
  return (
    <BrowserRouter>
      <EmployeesProvider>
        <div className="wrapper">
          <Header />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/employees" component={Employees} />
          <Footer />
        </div>
      </EmployeesProvider>
    </BrowserRouter>
  );
};

export default App;
