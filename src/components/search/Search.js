import React from "react";
import "./Search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Search() {
  return (
    <div className="search-wrapper">
      <button className="search-button">
        <SearchOutlinedIcon />
      </button>
      <input className="search-input" type="text" placeholder="Search" />
    </div>
  );
}

export default Search;
