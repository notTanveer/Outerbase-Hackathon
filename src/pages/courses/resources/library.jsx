import React, { useEffect, useState } from "react";
import "./library.scss";
import LibraryCatalog from "../catalog";
import { useNavigate } from "react-router-dom";
import makeApiCall from "../../../utils/apiCall";

function Library() {
  const [rData, setrData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    makeApiCall("GET", "getresourcelibrary").then((data) => {
      if (data?.success) {
        console.log(data);
        setrData(data.response.items);
      }
    });
  }, []);
  if (!rData) return <div className="loading">Loading</div>;
  return (
    <div className="main-container">
      <div className="main-header">
        <div className="heading">Library</div>
        <div className="sub-heading">
          A full packed Resource to meet all your needs in one place
        </div>
        <div className="search-box">
          <input type="search" placeholder="search" />
        </div>
      </div>
      <div className="catalog-holder">
        {rData.map((item) => (
          <LibraryCatalog key={item.id} liData={item} />
        ))}
      </div>
    </div>
  );
}

export default Library;
