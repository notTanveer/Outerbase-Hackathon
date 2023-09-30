// Sahil
import React from "react";
import "./StartUpPage.scss";
import { useNavigate } from "react-router-dom";
import HomeBanner from "./banner/Banner";

function StartUpPage({ register }) {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <HomeBanner register={register} />
      <div className="login-as-instructor">
        <div className="text-content">
          <div className="heading">Want to be an Instructor</div>
          <p>
            Are you a Instructor Just Login with your credentials and Get
            connected to the
          </p>
          <div className="ctas">
            <div
              className="banner-cta"
              onClick={() => navigate("/instructor/login")}
            >
              Instructor Login
            </div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/instructor")}
            >
              Instructor Dashboard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartUpPage;
