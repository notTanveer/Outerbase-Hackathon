import React, { useEffect, useState } from "react";
import "./slist.scss";
import makeApiCall from "../../utils/apiCall";

const StudentList = ({ courseEn }) => {
  const [Slis, setslist] = useState();
  useEffect(() => {
    makeApiCall("POST", "getall/studs", { course: courseEn }).then((data) => {
      if (data) {
        setslist(data.response.items);
      }
    });
  }, []);
  if (!Slis) return <div className="loading">Loading</div>;
  return (
    <div className="student-list-container">
      <div className="wrapper">
        <div className="header">
          <div className="your-students">Your students:</div>
          <div className="course-name">Devops</div>
        </div>
        <div className="list-container">
          {Slis.map((item) => (
            <div className="item">
              <div className="text-fields">
                <div className="name">{item.name}</div>
                <div className="username">{item.username}</div>
              </div>
              <div className="send-mail">Mail Icon</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
