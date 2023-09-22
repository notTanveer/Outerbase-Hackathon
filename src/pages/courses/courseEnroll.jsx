import React, { useEffect, useState } from "react";
import "./course.scss";
import makeApiCall from "../../utils/apiCall";
const CourseEnroll = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    makeApiCall("GET", "getall/course").then((data) => {
      if (data.success) {
        setCourses(data.response.items);
        console.log(data);
      }
    });
  }, []);

  if (!courses) return <div>Loading</div>;
  return (
    <div className="screen">
      <div className="course-enroll-container">
        <div className="main-container">
          <div className="heading">Enroll for a course</div>
        </div>
        <div className="course-list-container">
          {courses.map((item) => (
            <div className="course-list-item" key={item.id}>
              <div className="texts">
                <div className="heading">{item.course_name}</div>
                <div className="desc">{item.description}</div>
                <div className="instructor">
                  Instructor:- <span className="name">{item.name}</span>
                </div>
              </div>
              <div className="buttons">
                <button className="enroll-cta">Enroll</button>
                <div className="price">
                  {item.price === 0 ? "FREE" : item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseEnroll;
