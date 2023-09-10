import React from "react";
import "./vidlib.scss";
import VideoCatalog from "./VideoCatalog";
function VideoLibrary() {
  return (
    <div className="video-library-container">
      <div className="video-items">
        <VideoCatalog />
        <VideoCatalog />
        <VideoCatalog />
      </div>
    </div>
  );
}

export default VideoLibrary;
