// Will done by Yeasir
import React from "react";
import "./student.scss";
import { CgProfile } from "react-icons/cg";

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <div className="student-header">
        {/* This includes Name roll and Proifle picture */}
        <div className="name">Student Name</div>
        <div className="profile-options">
          <div className="roll">ABC004125</div>
          <div className="profile-pic">
            <CgProfile />
          </div>
        </div>
      </div>
      <div className="course-details">
        {/* THis includes course details  */}
        ABC Batch - JEE Advanced
      </div>
    </div>
  );
}

export default StudentDashboard;
