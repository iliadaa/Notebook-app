import React, { useState } from "react";
import "./Search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import dummynotes from "../../dummyNotes.json";
import Notes from "../notes/Notes";

function Search(props) {
  const { notes } = props;
  const [search, setSearch] = useState("");

  const displayFakeNotes = dummynotes.filter((note) => {
    if (search === "") {
      return note;
    } else {
      console.log(note.tags.includes(search.toLowerCase()));
      note.tags.includes(search.toLowerCase());
    }
  });

  console.log(displayFakeNotes);
  const fakeTag = displayFakeNotes.map((note) => {
    console.log(note);
    return <Notes key={note.id} value={note} tag={note.tags} />;
  });

  const displayNotes = notes.filter((note) =>
    note.tag.includes(search.toLowerCase())
  );

  const displayTags = displayNotes.map((note) => {
    return <Notes key={note.id} value={note.value} tag={note.tag} />;
  });
  console.log(displayTags);
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
        {fakeTag}
        {displayTags}
      </div>
    </>
  );
}

export default Search;
