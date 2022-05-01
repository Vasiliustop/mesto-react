import React from "react";
import logo from "../image/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
    </header>
  );
}
