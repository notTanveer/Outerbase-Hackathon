import React from "react";
import { useNavigate } from "react-router-dom";

function LibraryCatalog({ liData }) {
  const navigate = useNavigate();

  return (
    <div
      className="container"
      onClick={() => {
        navigate(`/library/${liData.id}`);
      }}
    >
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
