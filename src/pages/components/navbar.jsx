import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Scholar Sphere</Link>
      </div>
      <Link to="/student">Student</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/activity">Activity</Link>
    </div>
  );
}

export default Navbar;
