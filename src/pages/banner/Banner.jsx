import React from "react";
import "./Banner.scss";
import Image123 from "../../assets/img-01.png";
// import { TypeAnimation } from "react-type-animation";
function HomeBanner() {
  return (
    <div className="hero-banner">
      <div className="ban-content">
        <div className="text-content">
          <h1>Scholar Sphere</h1>
          <p>
            A platform for students of computer science background. With
            features like high defined courses with instructor, library with
            vast resourses of learning and guided paths
          </p>
          <div className="ctas">
            <div className="banner-cta">Sign Up</div>
            <div className="banner-cta v2">Log in</div>
          </div>
        </div>
        <img
          className="banner-img"
          src={Image123}
          alt="A photo for Scholar sphere"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
