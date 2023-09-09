import React from "react";
import FeeItem from "./feeItem";

function FeeStructure() {
  return (
    <div className="fee-main">
      <div className="heading">Fee</div>
      <div className="fee-container">
        <FeeItem />
        <FeeItem />
        <FeeItem />
        <FeeItem />
        <FeeItem />
        <FeeItem />
      </div>
    </div>
  );
}

export default FeeStructure;
