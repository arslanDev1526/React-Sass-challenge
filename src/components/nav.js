import React from "react";
import "./nav.scss";

import HeaderLogo from "./images/logo.svg";

export const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
        <img src={HeaderLogo} alt=" my svg" />
        </ul>
        <ul className="nav-links">
        <li> Features</li>
        <li> Team</li>
        <li> Sign In</li>
        </ul>
      </nav>
    </>
  );
};
