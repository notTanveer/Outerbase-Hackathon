import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="content">
      <div className="navbar">
        <div className="logo">
          <Link to="/">ScholarSphere</Link>
        </div>
        <div className="all-links">
          <Link to="/student">Student</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/community">Community</Link>
          <Link to="/library">Library</Link>
          <Link to="/chat">Chat</Link>
        </div>
        <div className="login">
          <div className="login-button">LOGIN</div>
          <div className="sign-up">SIGN UP</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
