import React, { useState } from "react";
import SyllabusItem from "./SyllabusItem";
function Syllabus({ syl }) {
  const [topicNum, setTopicNum] = useState(0);
  const syllabusData = JSON.parse(syl).syllabus;

  // const subjects = ["English", "Bengali", "Hindi", "Urdu", "Math", "Arabic"];
  return (
    <div className="main-syl-screen">
      <div className="heading">Syllabus</div>
      <div className="syllabus-container">
        <div className="subject-list">
          {syllabusData.map((item) => (
            <div
              className="subject-item"
              key={item.id}
              style={{
                backgroundColor: topicNum === item.id - 1 && "darkblue",
              }}
              onClick={() => {
                setTopicNum(item.id - 1);
              }}
            >
              {item.subject}
            </div>
          ))}
        </div>
        <div className="syl-item-container">
          {/* TODO Make this container Scrollable  */}
          {syllabusData[topicNum].syl.map((item) => (
            <SyllabusItem key={item.id} itemData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
