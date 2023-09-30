import React, { useEffect, useState } from "react";
import "./reso.scss";
import { useParams } from "react-router-dom";
import makeApiCall from "../../../utils/apiCall";

const ResourcePage = () => {
  const { id } = useParams();
  const [rrData, setrrData] = useState();
  const [sId, setsId] = useState(1);
  useEffect(() => {
    makeApiCall("POST", "getaresource", { id }).then((data) => {
      if (data?.success) {
        setrrData(data.response.items);
      }
    });
  }, []);
  // console.log(sId);
  console.log(rrData);
  const ls = [];

  if (!rrData) return <div className="loading">Loading</div>;
  return (
    <div className="main-screen-resource">
      <div className="container-resource">
        <div className="topic-list">
          {/* topic name goes here */}
          <div className="header-topic">Topics</div>
          {rrData.map((item) => (
            <div
              className="list-item"
              key={item.sid}
              style={{
                backgroundColor: sId === item.sid && "darkblue",
              }}
              onClick={() => {
                setsId(item.sid);
              }}
            >
              {item.header_list}
            </div>
          ))}
        </div>
        <div
          className="resource-page"
          dangerouslySetInnerHTML={{ __html: rrData[sId - 1].blog_list }}
        ></div>
      </div>
    </div>
  );
};

export default ResourcePage;
