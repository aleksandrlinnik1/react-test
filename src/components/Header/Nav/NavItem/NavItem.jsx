import React from "react";
import s from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={props.path} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default NavItem;
