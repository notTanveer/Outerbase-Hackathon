import React from "react";
import { IoMdSend } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import "./learn1.scss";
import { useNavigate } from "react-router-dom";
function Learn({ viddata }) {
  const navigate = useNavigate();
  const videoData = JSON.parse(viddata).videolist;
  return (
    <div className="learn-main">
      <div className="learn-header">
        <div className="heading-text">What do you want to learn today?</div>
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
      <div className="video-container">
        {videoData.map((item) => (
          <div className="video-item" key={item.id}>
            <div className="thumbnail">
              <iframe
                src={item.link}
                frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="details">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;
