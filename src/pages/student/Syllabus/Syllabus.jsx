import React from "react";
import SyllabusItem from "./SyllabusItem";
//A horizontal scrollable syllabus view
function Syllabus() {
  const subjects = ["English", "Bengali", "Hindi", "Urdu", "Math", "Arabic"];
  return (
    <div className="syllabus-container">
      <div className="subject-list">
        {subjects.map((item) => (
          <div className="subject-item">{item}</div>
        ))}
      </div>
      <div className="syl-item-container">
        {/* TODO Make this container Scrollable  */}
        <SyllabusItem />
        <SyllabusItem />
        <SyllabusItem />
        <SyllabusItem />
        <SyllabusItem />
      </div>
    </div>
  );
}

export default Syllabus;
