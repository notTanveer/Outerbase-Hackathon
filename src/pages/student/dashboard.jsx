// Will done by Yeasir
import React from "react";
import "./student.scss";
import { CgProfile } from "react-icons/cg";
import Routine from "./Routine";
import Syllabus from "./Syllabus/Syllabus";
import FeeStructure from "./Fee_Structure";
import Learn from "./Learn/learn";

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <div className="main-page">
        <div className="main-mid">
          <div className="welcome-text">Welcome , </div>
          <div className="student-header">
            {/* This includes Name roll and Proifle picture */}
            <div className="name">Student Name</div>
          </div>
          <div className="course-details">
            {/* THis includes course details  */}
            Begginer MERN Batch
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
