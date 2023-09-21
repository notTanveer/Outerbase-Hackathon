import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const navigate = useNavigate();
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
          <div className="login-button" onClick={() => navigate("/login")}>
            LOGIN
          </div>
          <div className="sign-up" onClick={() => navigate("/signup")}>
            SIGN UP
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
