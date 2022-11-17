import React from "react";
import "./Home.scss";
import { useState } from "react";
import Search from "../components/search/Search";
import Category from "../components/category/Category";
import NotesList from "../components/noteslist/NotesList";
import AddNotes from "../components/add-notes/AddNotes";
function Home() {
  const [notes, setNotes] = useState([]);

  const getNotes = (info) => {
    setNotes((notes) => [...notes, info]);
  };

  return (
    <>
      <div className="home">
        <div className="left-layout">
          <Search notes={notes} />
        </div>
        <div className="right-layout">
          <div className="category">
            <Category />
          </div>
          <AddNotes getNotes={getNotes} />
          <NotesList notes={notes} />
        </div>
      </div>
    </>
  );
}

export default Home;
