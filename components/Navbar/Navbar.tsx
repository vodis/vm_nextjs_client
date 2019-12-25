import * as React from "react";
import Link from "next/link";
import UserInterfaces from "../UserInterface/UserInterface";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>Logo</div>
      <div>Categories</div>
      <div>Search</div>
      <UserInterfaces />
    </nav>
  );
};

export default Navbar;
