import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterImage from "../../assets/img-01.png";
import { FaEnvelope, FaLock } from "react-icons/fa";
import makeApiCall from "../../utils/apiCall";

function InstructorLoginPage() {
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
      makeApiCall("POST", "geta/instructor", { id: formData.email }).then(
        (data) => {
          if (data?.success) {
            if (data.response.count > 0) {
              //Email exists now check for password
              if (data.response.items[0].password === formData.password) {
                //User verified Open Dashboard and save into localstorage
                localStorage.setItem(
                  "instructor",
                  JSON.stringify({
                    username: data.response.items[0].name,
                    email: data.response.items[0].email,
                  })
                );
                navigate("/instructor");
              } else {
                //Password is wrong try again
                alert(`Wrong password please try again`);
              }
            } else {
              //User not exists alert
              alert(
                `No email registered with ${formData.email} . Please contact the owner`
              );
            }
          }
        }
      );
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
            <span className="heading">Instructor Login</span>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default InstructorLoginPage;
