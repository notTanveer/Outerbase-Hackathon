import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiAt } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import "../register.scss";
import RegisterImage from "../../assets/img-01.png";
import { useNavigate } from "react-router-dom";
function UserRegistration() {
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
            <span className="heading">
              Provide your information with Date of Birth
            </span>
            <div
              className="wrap-input100 space"
              data-validate="Valid First name is required"
            >
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="input100"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <CgProfile />
              </span>
            </div>
            <div
              className="wrap-input100 space"
              data-validate="Valid Last name is required"
            >
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="input100"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <CgProfile />
              </span>
            </div>
            <div
              className="wrap-input100 space"
              data-validate="Username is not valid"
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input100"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <BiAt />
              </span>
            </div>
            <div
              className="wrap-input100 space"
              data-validate="Username is not valid"
            >
              <input
                type="date"
                name="username"
                placeholder="Username"
                className="input100"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <BsFillCalendarDateFill />
              </span>
            </div>
            <div className="login-con">
              <button>REGISTER</button>
            </div>
            {/* <div className="forgot">Forgot password</div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
