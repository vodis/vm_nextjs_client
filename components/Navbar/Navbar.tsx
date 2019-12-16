import * as React from "react";
import Link from "next/link";
import UserInterfaces from "../UserInterfaces/UserInterfaces";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>Logo</div>
      <div>Catefories</div>
      <div>Search</div>
      <UserInterfaces />
    </nav>
  );
};

export default Navbar;
