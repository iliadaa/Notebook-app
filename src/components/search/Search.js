import React from "react";
import "./Search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Search() {
  return (
    <div className="search-wrapper">
      <button className="search-button">
        <SearchOutlinedIcon style={{ fontSize: 26 }} />
      </button>
      <input className="search-input" type="text" placeholder="Search anything..." />
    </div>
  );
}

export default Search;
