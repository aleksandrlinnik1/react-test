import React from "react";
import s from "./Header.module.css";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
