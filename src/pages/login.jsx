import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterImage from "../assets/img-01.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { supabase } from "./UserRegistration/client";

function LoginPage({ setToken, register }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email.trim(),
        password: formData.password,
      });
      if (error) throw error;
      localStorage.setItem("token", JSON.stringify(data));
      setToken(data);
      if (register) {
        navigate("/student");
      } else {
        navigate("/register");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="page">
      <div className="main-content">
        <div className="wrapper">
          <div className="login-pic js-tilt" data-tilt>
            <img src={RegisterImage} alt="ni" />
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <span className="heading">Login User</span>
            <div
              className="wrap-input100 space"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input100"
                value={formData.email}
                onChange={handleChange}
                required
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
                type="password"
                name="password"
                placeholder="Password"
                className="input100"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaLock />
              </span>
            </div>
            <div className="login-con">
              <button>LOGIN</button>
            </div>
            <div className="forgot">Forgot password</div>
            <div
              className="create-acc"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create your account &#8594;
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
