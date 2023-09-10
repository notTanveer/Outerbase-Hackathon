import React from "react";
import "./library.scss";
import LibraryCatalog from "../catalog";
import VideoLibrary from "./videoLibrary";

function Library() {
  return (
    <div className="main-container">
      <div className="heading">Library</div>
      <div className="search-box">
        <input type="text" placeholder="search" />
        <div className="search-icon"></div>
      </div>
      <div className="sub-heading">
        A full packed Resource to meet all your needs in one place
      </div>
      <VideoLibrary />
      <div className="catalog-holder">
        <LibraryCatalog />
        <LibraryCatalog />
        <LibraryCatalog />
        <LibraryCatalog />
        <LibraryCatalog />
        <LibraryCatalog />
        <LibraryCatalog />
      </div>
    </div>
  );
}

export default Library;
