import React from "react";

function VideoCatalog() {
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <iframe
          src="https://www.youtube.com/embed/v4i2bF99WqA?si=TltsK09yhf4WDC-F"
          frameborder="0"
        ></iframe>
      </div>
      <div className="title">Programming with Java</div>
    </div>
  );
}

export default VideoCatalog;
