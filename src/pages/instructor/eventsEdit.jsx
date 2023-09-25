import React from "react";
import Routine from "../student/Routine";
import { MdClose } from "react-icons/md";
const EventEdit = ({ data, setshow }) => {
  return (
    <div className="event-edit-panel">
      <div className="op-layer">
        <div className="event-content">
          <div className="header">
            <div className="heading">Edit Classes</div>
            <span
              className="close-btn"
              onClick={() => {
                setshow(false);
              }}
            >
              <MdClose />
              <span className="text">CLOSE</span>
            </span>
          </div>
          <div className="rt-container">
            <Routine isEdit={true} routine={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventEdit;
