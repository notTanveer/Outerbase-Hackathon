import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./navbar.scss";

function Navbar({ register }) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (register) {
  //     navigate("/student");
  //   }
  // }, []);
  return (
    <div className="content">
      <div className="navbar">
        <div className="logo">
          <Link to="/">ScholarSphere</Link>
        </div>
        <div className="all-links">
          {register && <Link to="/student">Student</Link>}
          {register && <Link to="/course">Courses</Link>}
          <Link to="/community">Community</Link>
          <Link to="/library">Library</Link>
          {register && <Link to="/chat">Chat</Link>}
        </div>
        {!register ? (
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
