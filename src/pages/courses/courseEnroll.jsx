import React from "react";
import "./course.scss";
const CourseEnroll = () => {
  return (
    <div className="screen">
      <div className="course-enroll-container">
        <div className="main-container">
          <div className="heading">Enroll for a course</div>
        </div>
        <div className="course-list-container">
          <div className="course-list-item">
            <div className="texts">
              <div className="heading">
                Web Development with Python and Javascript
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium nulla itaque consequatur. Aliquam repellendus
                repellat, ex officia dicta quia modi.
              </div>
              <div className="instructor">
                Instructor:- <span className="name">Yeasir Rahaman</span>
              </div>
            </div>
            <div className="buttons">
              <button className="enroll-cta">Enroll</button>
              <div className="price">5895</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnroll;
