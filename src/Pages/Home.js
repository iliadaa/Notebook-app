import React from "react";
import "./Home.scss";
import { useState } from "react";
import Search from "../components/search/Search";
import Category from "../components/category/Category";
import NotesList from "../components/noteslist/NotesList";
import Notes from "../components/add-notes/Notes";
function Home() {
  const [notes, setNotes] = useState([]);
  const getNotes = (info) => {
    setNotes((notes) => [...notes, info]);
  };

  return (
    <>
      <div className="home">
        <div className="left-layout">
          <Search />
          <div className="all-notes">
            <h3>All Notes</h3>
            <NotesList notes={notes} />
          </div>
        </div>
        <div className="right-layout">
          <div className="category">
            <Category />
          </div>
          <Notes getNotes={getNotes} />
          <NotesList notes={notes} />
        </div>
      </div>
    </>
  );
}

export default Home;
