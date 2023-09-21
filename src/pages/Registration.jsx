import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./register.scss";
import RegisterImage from "../assets/img-01.png";
import { useNavigate } from "react-router-dom";
function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or store it locally).
    console.log(formData);
  };

  return (
    <div className="page">
      <div className="main-content">
        <div className="wrapper">
          <div className="login-pic js-tilt" data-tilt>
            <img src={RegisterImage} alt="ni" />
          </div>
          <form action="" className="form">
            <span className="heading">Register User</span>
            <div
              className="wrap-input100 space"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input100"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaEnvelope />
              </span>
            </div>
            <div
              className="wrap-input100 space"
              data-validate="Password is required"
            >
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input100"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaLock />
              </span>
            </div>
            <div className="login-con">
              <button>SIGN UP</button>
            </div>
            {/* <div className="forgot">Forgot password</div> */}
            <div
              className="create-acc"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already a user? Login &#8594;
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
