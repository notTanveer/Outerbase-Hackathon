import React, { useEffect, useState } from "react";
import "./library.scss";
import LibraryCatalog from "../catalog";
import makeApiCall from "../../../utils/apiCall";

function Library() {
  const [rData, setrData] = useState();
  const [finalData, setFinalData] = useState();

  useEffect(() => {
    makeApiCall("GET", "getresourcelibrary").then((data) => {
      if (data?.success) {
        console.log(data);
        setrData(data.response.items);
        setFinalData(data.response.items);
      }
    });
  }, []);
  if (!finalData) return <div className="loading">Loading</div>;
  return (
    <div className="main-container">
      <div className="main-header">
        <div className="heading">Library</div>
        <div className="head-sub-heading">
          A full packed Resource to meet all your needs in one place
        </div>
        <div className="search-box">
          <input
            type="search"
            placeholder="search"
            onChange={(e) => {
              setFinalData(
                rData.filter((item) =>
                  item.title.toLowerCase().includes(e.target.value)
                )
              );
            }}
          />
        </div>
      </div>
      <div className="catalog-holder">
        {finalData.map((item) => (
          <LibraryCatalog key={item.id} liData={item} />
        ))}
      </div>
    </div>
  );
}

export default Library;
