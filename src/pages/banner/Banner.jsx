import React from "react";
import "./Banner.scss";
// import { TypeAnimation } from "react-type-animation";
function HomeBanner() {
  return (
    <div className="banner">
      <div className="content">
        <div className="heading">Scholar Sphere</div>
        {/* <div className="type-animation"> */}
          {/* <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "A platform of knowledge",
              1000,
              "A platform of Love",
              1000,
              "A platform of Kindness",
              1000,
            ]}
            speed={40}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          /> */}
        {/* </div> */}
      </div>
     </div>
  );
}

export default HomeBanner;
