import React from "react";
import "./Home.scss";
import Search from "../components/search/Search";
import AddNotes from "../components/add-new-notes/AddNotes";

function Home() {
  return (
    <>
      <div className="home">
        <div className="left-layout">
          <Search />
        </div>
        <div className="right-layout">
          <div className="add-notes">
            <AddNotes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
