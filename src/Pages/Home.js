import React from "react";
import "./Home.scss";
import { useState } from "react";
import Search from "../components/search/Search";
import AddNotes from "../components/add-new-notes/AddNotes";
import Category from "../components/category/Category";
import NotesList from "../components/noteslist/NotesList"

function Home(props) {
  const [notes, setNotes] = useState([])

  const getNotes = (info) => {
    setNotes(info)

  };

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
          <AddNotes getNotes={getNotes} />
          <NotesList notes={notes} />
        </div>
      </div>
    </>
  );
}

export default Home;
