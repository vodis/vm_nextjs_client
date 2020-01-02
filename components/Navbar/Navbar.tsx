import * as React from "react";
import Link from "next/link";
import MainMenu from "../MainMenu/MainMenu";
import UserInterfaces from "../UserInterface/UserInterface";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <MainMenu />
      <div>Search</div>
      <UserInterfaces />
    </div>
  );
};

export default Navbar;
