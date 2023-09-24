import React from "react";

function LibraryCatalog({ liData }) {
  return (
    <div className="container">
      <div className="image-place">
        <img src={liData.img} alt="" />
      </div>
      <div className="text-place">
        <div className="heading">{liData.title}</div>
        <div className="sub-heading">{liData.description}</div>
      </div>
    </div>
  );
}

export default LibraryCatalog;
