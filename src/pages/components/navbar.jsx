import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./navbar.scss";

function Navbar({ token }) {
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
        {!token ? (
          <div className="login">
            <div className="login-button" onClick={() => navigate("/login")}>
              LOGIN
            </div>
            <div className="sign-up" onClick={() => navigate("/signup")}>
              SIGN UP
            </div>
          </div>
        ) : (
          <div className="icon-container">
            <CgProfile />
            <div className="username">
              {JSON.parse(localStorage.getItem("register")).username}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
