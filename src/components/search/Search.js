import React, { useState } from "react";
import "./Search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import dummynotes from "../../dummyNotes.json";
import Notes from "../notes/Notes";
//import NotesList from "../noteslist/NotesList";

function Search() {
  // const { items } = props
  //const dummynotestag = dymmynotes
  //  const [items, setItems] = useState();
  const [search, setSearch] = useState("");

  //useEffect(() => {
  //  setItems();
  // }, []);
  const displayNotes = dummynotes.filter(note => note.tags.includes(search.toLowerCase()));
  console.log(displayNotes)
  return (
    <>
      <div className="search-wrapper">
        <button className="search-button">
          <SearchOutlinedIcon style={{ fontSize: 26 }} />
        </button>
        <input
          value={search}
          className="search-input"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div>
        <h3>All Notes</h3>
        <div>
          {displayNotes.map(note => {
            return (
              <Notes key={note.id} value={note} tag={note.tags} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
