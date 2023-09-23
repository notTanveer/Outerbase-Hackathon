import React from "react";

function RoutineItem({ data }) {
  if (!data) return <div>Loadiing</div>;
  return (
    <div className="main-item">
      <div className="time">{data.time}</div>
      <div className="subject-name">{data.name}</div>
      <div className="teacher-info"> {data.details}</div>
    </div>
  );
}

export default RoutineItem;
