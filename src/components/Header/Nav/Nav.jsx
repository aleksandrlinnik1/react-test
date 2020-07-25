import React from "react";
import s from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <NavItem path={"/home"} name={"Home"} />
      <NavItem path={"/employees"} name={"Employees"} />
    </nav>
  );
};

export default Nav;
