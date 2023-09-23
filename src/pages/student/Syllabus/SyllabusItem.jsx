import React from "react";

function SyllabusItem({ itemData }) {
  return (
    <div className="syllabus-item">
      <div className="title">{itemData.name}</div>
      <div className="desc">{itemData.description}</div>
    </div>
  );
}

export default SyllabusItem;
