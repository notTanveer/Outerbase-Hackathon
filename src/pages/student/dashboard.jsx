// Will done by Yeasir
import React, { useEffect, useState } from "react";
import "./student.scss";
import Routine from "./Routine";
import Syllabus from "./Syllabus/Syllabus";
import FeeStructure from "./Fee_Structure";
import Learn from "./Learn/learn";
import makeApiCall from "../../utils/apiCall";

function StudentDashboard() {
  const [StudentData, setStudentData] = useState();
  useEffect(() => {
    makeApiCall("POST", "get/student").then((data) => {
      setStudentData(data);
    });
  });
  return (
    <div className="student-dashboard">
      <div className="main-page">
        <div className="main-mid">
          <div className="welcome-text">Welcome , </div>
          <div className="student-header">
            {/* This includes Name roll and Proifle picture */}
            <div className="name">{StudentData?.response?.items[0].name}</div>
          </div>
          <div className="course-details">
            {/* THis includes course details  */}
            {StudentData?.response?.items[0].course_name}
          </div>
          <Learn />
          <Syllabus />
        </div>
        <div className="aside">
          <Routine />
          <FeeStructure />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
