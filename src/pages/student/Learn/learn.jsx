import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import "./learn1.scss";
import { useNavigate } from "react-router-dom";
function Learn({ viddata }) {
  const navigate = useNavigate();
  const videoData = JSON.parse(viddata).videolist;
  const [finalData, setFinalData] = useState(videoData);

  return (
    <div className="learn-main">
      <div className="learn-header">
        <div className="heading-text">What do you want to learn today?</div>
        <div className="search-box">
          <input
            type="text"
            name="search-form"
            placeholder="React Js Tutorial"
            onChange={(e) => {
              setFinalData(
                videoData.filter((item) =>
                  item.title.toLowerCase().includes(e.target.value)
                )
              );
            }}
          />
          <div className="send-button">
            <IoMdSend />
          </div>
        </div>
        <div className="visit-library" onClick={() => navigate("/library")}>
          Visit Library <FaArrowRight />
        </div>
      </div>
      <div className="video-container">
        {finalData.map((item) => (
          <div className="video-item" key={item.id}>
            <div className="thumbnail">
              <iframe
                src={item.link}
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
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
