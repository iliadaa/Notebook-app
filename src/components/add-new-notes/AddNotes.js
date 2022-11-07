import React from "react";
import "./AddNotes.scss";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function AddNotes(props) {
  const [inputNotes, setInputNotes] = useState("");
  const [notes, setNotes] = useState([]);
  let nextId = 0

  const handleSubmit = (event) => {
    setInputNotes(event.target.value);
  };

  const Submit = (e) => {
    if (inputNotes.trim().length !== 0) {

      setNotes([
        ...notes,
        {
          value: inputNotes,
          id: nextId++,
          key: Date.now()
        }
      ]);
      setInputNotes("");
      props.getNotes([...notes])
      console.log([...notes], "notes");

    }
    e.preventDefault();
  };

  return (
    <div className="notes-container">
      <form className="text-notes" onSubmit={Submit}>
        <input
          placeholder="Add a new notes..."
          value={inputNotes}
          onChange={handleSubmit}
        />
        <button type="submit" className="notes-button" >
          <AddIcon style={{ color: "rgb(255, 100, 157)", fontSize: 50 }} />
        </button>
      </form>
    </div>
  );
}

export default AddNotes;
