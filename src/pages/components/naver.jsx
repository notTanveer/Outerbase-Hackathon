import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavItemMobile = ({ register, setShowNav }) => {
  const navigate = useNavigate();

  return (
    <div className="mobile-content">
      <div className="list">
        {register && (
          <div
            className="item"
            onClick={() => {
              navigate("/student");
              setShowNav(false);
            }}
          >
            Dashboard
          </div>
        )}
        {register && (
          <div
            className="item"
            onClick={() => {
              navigate("/course");
              setShowNav(false);
            }}
          >
            Courses
          </div>
        )}
        <div
          className="item"
          onClick={() => {
            navigate("/library");
            setShowNav(false);
          }}
        >
          Library
        </div>
        {!register && (
          <div
            className="item"
            onClick={() => {
              navigate("/login");
              setShowNav(false);
            }}
          >
            Login
          </div>
        )}
        {!register && (
          <div
            className="item"
            onClick={() => {
              navigate("/signup");
              setShowNav(false);
            }}
          >
            Sign Up
          </div>
        )}
        {register && (
          <div
            className="item"
            onClick={() => {
              setShowNav(false);
            }}
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItemMobile;
