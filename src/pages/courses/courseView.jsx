import React, { useEffect, useState } from "react";
import codePhoto from "../../assets/code-1.jpg";
import "./courseview.scss";
import { useNavigate, useParams } from "react-router-dom";
import makeApiCall from "../../utils/apiCall";

const CourseView = () => {
  const [course, setCourse] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    makeApiCall("POST", "geta/course", { id }).then((data) => {
      if (data?.success) {
        setCourse(data.response.items[0]);
      }
    });
  }, []);
  if (!course) return <div>Loadings</div>;
  return (
    <div className="main-screen">
      <div className="single-main-container">
        <div className="single-heading">{course.course_name}</div>
        <div className="single-image">
          <img src={course.imaglink} alt="WHy" />
        </div>
        <div className="single-desc">{course.description}</div>
        <div className="enroll-cta">
          <div className="price">
            {course.price === 0 ? "Free" : course.price}
          </div>
          <button>Enroll</button>
        </div>
        <div className="instructor-container">
          <div className="instructor-text">Instructor:-</div>
          <div className="pic">
            <img
              src={
                !course.pic
                  ? "https://i.ibb.co/Pj1NpYq/downloadq.jpg"
                  : course.pic
              }
              alt=""
            />
          </div>
          <div className="instructor-name">{course.name}</div>
          <div className="instructor-description">{course.bio}</div>
          <div className="email">{course.email}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
