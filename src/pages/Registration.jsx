import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./register.scss";
import RegisterImage from "../assets/img-01.png";
import { useNavigate } from "react-router-dom";
import { supabase } from "./UserRegistration/client";
function Registration() {
  const [sumbit, setsumbit] = useState(true);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    confirm: "",
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

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setsumbit(false);
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
          <form className="form">
            <span className="heading">Register User</span>
            {sumbit ? (
              <>
                <div
                  className="wrap-input100 space"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    type="email"
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
                <div
                  className="wrap-input100 space"
                  data-validate="Confirm Password is not valid"
                >
                  <input
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    className="input100"
                    value={formData.confirm}
                    onChange={handleChange}
                    required
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <FaLock />
                  </span>
                </div>
                <div className="login-con">
                  <button onClick={handleSubmit}>SIGN UP</button>
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
              </>
            ) : (
              <div className="text-container">
                <div className="text">
                  Verification link has been sent to <br />
                  <div className="email">{formData.email}</div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
