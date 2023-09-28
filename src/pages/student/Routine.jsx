import React, { useState } from "react";
import "./routine.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import RoutineItem from "./routineItem";
import makeApiCall from "../../utils/apiCall";

function Routine({ routine, isEdit, courseNumber }) {
  const courseData = JSON.parse(routine).upcoming;
  const [editingData, setEditingData] = useState(courseData);
  const [fotmData, setFotmData] = useState({
    time: "",
    name: "",
    details: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFotmData({
      ...fotmData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditingData([...editingData, fotmData]);
    console.log(editingData);
  };
  return (
    <div className="routine-main">
      {!isEdit && <div className="heading">Upcoming Classes</div>}
      <div className="routine-container">
        {isEdit
          ? editingData.map((item) => (
              <div className="item-wrapper">
                <RoutineItem data={item} />
                <div
                  className="delete-icon"
                  onClick={() => {
                    setEditingData(
                      editingData.filter((itemwa) => itemwa != item)
                    );
                  }}
                >
                  <RiDeleteBin6Line />
                </div>
              </div>
            ))
          : courseData.map((item) => <RoutineItem data={item} />)}
      </div>
      {isEdit && (
        <div className="add">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="time"
              placeholder="Enter time"
              value={fotmData.time}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={fotmData.name}
              onChange={handleChange}
            />
            <textarea
              type="text"
              name="details"
              placeholder="Enter details"
              value={fotmData.details}
              onChange={handleChange}
            />
            <input type="submit" value="Add" />
          </form>
          <button
            className="save-button"
            onClick={() => {
              //TODO
              makeApiCall("PUT", "updateevents", {
                ev: JSON.stringify({ upcoming: editingData }),
                course: courseNumber.toString(),
              }).then((data) => {
                console.log(data);
              });
            }}
          >
            SAVE
          </button>
        </div>
      )}
    </div>
  );
}

export default Routine;
