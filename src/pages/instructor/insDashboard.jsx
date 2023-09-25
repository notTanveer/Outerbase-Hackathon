import React, { useEffect, useState } from "react";
import "./insdash.scss";
import makeApiCall from "../../utils/apiCall";

const InstructorDashboard = () => {
  const [insData, setInsData] = useState();
  const [courseData, setCourseData] = useState();
  const myEmail = JSON.parse(localStorage.getItem("instructor")).email;
  // console.log(myEmail);
  useEffect(() => {
    makeApiCall("POST", "getdash/instructor", { email: myEmail }).then(
      (data) => {
        // console.log(data);
        makeApiCall("POST", "detailsincourse", {
          id: data.response.items[0].course_id.toString(),
        }).then((datas) => {
          console.log(datas);
          // const pppp = JSON.parse(datas.response.items[0].upcoming);
          // console.log(pppp.devops[0].name);
        });
      }
    );
  }, []);
  return <div className="ins-dash-container">InstructorDashboard</div>;
};

export default InstructorDashboard;
