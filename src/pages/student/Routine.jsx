import React from "react";
import RoutineItem from "./routineItem";
function Routine() {
  return (
    <div className="routine-main">
      <div className="heading">Upcoming Classes</div>
      <div className="routine-container">
        <RoutineItem />
        <RoutineItem />
        <RoutineItem />
      </div>
    </div>
  );
}

export default Routine;
