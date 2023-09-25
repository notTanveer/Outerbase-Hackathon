import React from "react";

function RoutineItem({ data, isEdit }) {
  if (!data) return <div>Loadiing</div>;
  return (
    <div className="main-item">
      <div className="time">{data.time}</div>
      <div className="subject-name">{data.name}</div>
      <div className="teacher-info"> {data.details}</div>
      {isEdit && <div className="edit-options"></div>}
    </div>
  );
}

export default RoutineItem;
