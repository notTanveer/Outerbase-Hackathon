import React from "react";
import "./routine.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import RoutineItem from "./routineItem";

function Routine({ routine, isEdit }) {
  const courseData = JSON.parse(routine).upcoming;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="routine-main">
      <div className="heading">Upcoming Classes</div>
      <div className="routine-container">
        {isEdit
          ? courseData.map((item) => (
              <div className="item-wrapper">
                <RoutineItem data={item} />
                <div className="delete-icon">
                  <RiDeleteBin6Line />
                </div>
              </div>
            ))
          : courseData.map((item) => <RoutineItem data={item} />)}
      </div>
      {isEdit && (
        <div className="add">
          <form onSubmit={handleSubmit}>
            <input type="text" name="time" placeholder="Enter time" />
            <input type="text" name="name" placeholder="Enter name" />
            <textarea type="text" name="details" placeholder="Enter details" />
            <input type="submit" value="Add" />
          </form>
        </div>
      )}
    </div>
  );
}

export default Routine;
