// Sahil
import React from "react";
import "./StartUpPage.scss";
import { useNavigate } from "react-router-dom";
import HomeBanner from "./banner/Banner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function StartUpPage({ register }) {
  const navigate = useNavigate();
  const testimonialData = [
    {
      text: "I love this product! It's changed my life.",
      name: "John Doe",
      image: "john-doe.jpg",
    },
    {
      text: "Highly recommended. Excellent quality.",
      name: "Jane Smith",
      image: "jane-smith.jpg",
    },
    {
      text: "Outstanding service and support!",
      name: "Bob Johnson",
    },
  ];
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
