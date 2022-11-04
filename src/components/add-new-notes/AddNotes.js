import React from "react";
import "./AddNotes.scss";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function AddNotes() {
  const [inputNotes, setInputNotes] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (event) => {
    setInputNotes(event.target.value);
  };

  const clickSubmit = () => {
    setNotes((prevNotesValue) => prevNotesValue.concat({ value: inputNotes }));
    setInputNotes("");
    console.log(inputNotes);
  };

  return (
    <div className="notes-container">
      <div className="text-notes">
        <textarea
          placeholder="Add a new notes..."
          value={inputNotes}
          onChange={handleSubmit}
        />
      </div>
      <button className="notes-button" onClick={clickSubmit}>
        <AddIcon style={{ color: "rgb(255, 100, 157)", fontSize: 50 }} />
      </button>
    </div>
  );
}

export default AddNotes;
