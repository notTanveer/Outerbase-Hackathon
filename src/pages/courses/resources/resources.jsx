import React from "react";
import { useParams } from "react-router-dom";

const ResourcePage = () => {
  const { id } = useParams();

  return <div>ResourcePage</div>;
};

export default ResourcePage;
