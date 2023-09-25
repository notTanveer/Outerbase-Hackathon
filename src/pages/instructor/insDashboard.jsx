import React, { useEffect, useState } from "react";
import "./insdash.scss";
import makeApiCall from "../../utils/apiCall";
import Syllabus from "../student/Syllabus/Syllabus";
import Routine from "../student/Routine";
import StudentList from "./studentlist";

const InstructorDashboard = () => {
  const [insData, setInsData] = useState();
  const [courseData, setCourseData] = useState();
  const myEmail = JSON.parse(localStorage.getItem("instructor")).email;
  // console.log(myEmail);
  useEffect(() => {
    makeApiCall("POST", "getdash/instructor", { email: myEmail }).then(
      (data) => {
        // console.log(data);

        if (data) {
          setInsData(data);
          makeApiCall("POST", "detailsincourse", {
            id: data.response.items[0].course_id.toString(),
          }).then((datas) => {
            console.log(datas);
            setCourseData(datas);
            // const pppp = JSON.parse(datas.response.items[0].upcoming);
            // console.log(pppp.devops[0].name);
          });
        }
      }
    );
  }, []);
  if (!courseData) return <div className="loading">Loading ...</div>;
  return (
    <div className="ins-dash-container">
      <div className="main-page">
        <div className="main-mid">
          <div className="welcome-text">Welcome , </div>
          <div className="student-header">
            {/* This includes Name roll and Proifle picture */}
            <div className="name">{insData.response.items[0].name}</div>
          </div>
          <div className="course-details">
            {/* THis includes course details  */}
            {courseData.response.items[0].course_name}
          </div>
          <StudentList
            courseEn={courseData.response.items[0].course_id.toString()}
          />
          <Syllabus syl={courseData?.response.items[0].syllabus} />
        </div>
        <div className="aside">
          <Routine routine={courseData?.response.items[0].upcoming} />
          <div className="edit-classes">Edit Classes</div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
