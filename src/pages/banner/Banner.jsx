import React from "react";
import "./Banner.scss";
import Image123 from "../../assets/img-01.png";
import { useNavigate } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";
function HomeBanner({ register }) {
  const navigate = useNavigate();

  const lightPressed = () => {
    navigate(register ? "/student" : "/signup");
  };
  const hardPressed = () => {
    navigate(register ? "/library" : "/login");
  };

  return (
    <div className="hero-banner">
      <div className="ban-content">
        <div className="text-content">
          <h1>Scholar Sphere</h1>
          {register ? (
            <>
              <p>
                Hey Welcome to Scholar Sphere! Its marvellous to see you again.
                Continue your learning through the best platform in the
                internet.
              </p>
              <div className="ctas">
                <div className="banner-cta" onClick={lightPressed}>
                  Dashboard
                </div>
                <div className="banner-cta v2" onClick={hardPressed}>
                  Libray
                </div>
              </div>
            </>
          ) : (
            <>
              <p>
                A platform for students of computer science background. With
                features like high defined courses with instructor, library with
                vast resourses of learning and guided paths
              </p>
              <div className="ctas">
                <div className="banner-cta" onClick={lightPressed}>
                  Sign Up
                </div>
                <div className="banner-cta v2" onClick={hardPressed}>
                  Log in
                </div>
              </div>
            </>
          )}
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
