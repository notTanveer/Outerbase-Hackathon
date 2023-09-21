import React from "react";
import { IoMdSend } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import "./learn.scss";
import { useNavigate } from "react-router-dom";
function Learn() {
  const navigate = useNavigate();
  return (
    <div className="learn-main">
      <div className="heading-text">What do you want to learn today?</div>
      <div className="video-container">
        {/* we need youtube integrations here */}
        <div className="video-item">I am a video</div>
        <div className="video-item">I am a video</div>
        <div className="video-item">I am a video</div>
      </div>
      <div className="search-box">
        <input type="text" placeholder="React Js Tutorial" />
        <div className="send-button">
          <IoMdSend />
        </div>
      </div>
      <div className="visit-library" onClick={() => navigate("/library")}>
        Visit Library <FaArrowRight />
      </div>
    </div>
  );
}

export default Learn;
