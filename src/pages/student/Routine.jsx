import React from "react";

import RoutineItem from "./routineItem";

function Routine({ routine }) {
  const courseData = JSON.parse(routine).devops;
  return (
    <div className="routine-main">
      <div className="heading">Upcoming Classes</div>
      <div className="routine-container">
        {courseData.map((item) => (
          <RoutineItem data={item} />
        ))}
      </div>
    </div>
  );
}

export default Routine;
