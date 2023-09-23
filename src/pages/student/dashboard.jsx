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
  const [courseData, setCourseData] = useState();
  const myEmail = JSON.parse(localStorage.getItem("token")).user.email;
  useEffect(() => {
    makeApiCall("POST", "geta/student", { id: myEmail }).then((data) => {
      setStudentData(data);
      // console.log(data.response.items[0].batch_enrolled);

      makeApiCall("POST", "detailsincourse", {
        id: "1",
      }).then((datas) => {
        console.log(datas);
        // const pppp = JSON.parse(datas.response.items[0].upcoming);
        // console.log(pppp.devops[0].name);
        setCourseData(datas);
      });
    });
  }, []);
  if (!courseData) return <div>Loading</div>;
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
          <Syllabus syl={courseData?.response.items[0].syllabus} />
        </div>
        <div className="aside">
          <Routine routine={courseData?.response.items[0].upcoming} />
          {/* <FeeStructure /> */}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
