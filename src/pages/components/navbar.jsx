import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="nav">
      Navbar
      <Link to="/">Home</Link>
      <Link to="/student">Student</Link>
    </div>
  );
}

export default Navbar;
