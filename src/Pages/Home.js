import React from "react";
import "./Home.scss";
import Search from "../components/search/Search";
import AddNotes from "../components/add-new-notes/AddNotes";
import Category from "../components/category/Category";
import Notes from "../components/notes/Notes";

function Home() {
  return (
    <>
      <div className="home">
        <div className="left-layout">
          <Search />
        </div>
        <div className="right-layout">
          <div className="category">
            <Category />
          </div>
          <div className="add-notes">
            <AddNotes />
          </div>
          <div className="new-notes">
            <Notes />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
