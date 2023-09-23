import React from "react";
import "./library.scss";
import LibraryCatalog from "../catalog";

function Library() {
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
