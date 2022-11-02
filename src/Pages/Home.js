import React from "react";
import "./Home.scss";
import Search from "../components/search/Search";

function Home() {
  return (
    <>
      <div className="home">
        <div className="left-layout">
          <Search />
        </div>
        <div className="right-layout">My Note</div>
      </div>
    </>
  );
}

export default Home;
