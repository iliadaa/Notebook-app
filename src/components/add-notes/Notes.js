import React, { useState, useRef } from "react";
import "./Notes.scss";
import CloseIcon from '@mui/icons-material/Close';
function Notes(props) {
  const [inputNotes, setInputNotes] = useState("");
  let nextId = 0;

  const handleSubmit = (event) => {
    setInputNotes(event.target.value);

  };
  const descriptionRef = useRef()

  const Submit = (e) => {

    if (inputNotes.trim().length !== 0) {
      props.getNotes(
        {
          value: inputNotes,
          id: nextId++,
          key: Date.now(),
        });
    }
    setInputNotes("")
    e.preventDefault();
  };

  return (
    <form onSubmit={Submit}>
      <div className="notes">
        <div className="notes-info">
          <div className="title-notes display">
            <label className="label">Title:</label>
            <input
              className="input"
              value={inputNotes}
              onChange={handleSubmit}
            />
          </div>
          <div className="description-notes display">
            <label className="label">Description:</label>
            <textarea className="input" />
          </div>
          <div className="tags-notes display">
            <label className="label">Tags:</label>
            <ul className="input-tag-notes-list">
              <li>
                item 1 <button type="button"><CloseIcon /></button>
              </li>
              <li className="input-tag-notes">
                <input type="text" />
              </li>
            </ul>
          </div>
        </div>
        <div className="buttton-add-notes">
          <button type="submit" className="notes-button ">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default Notes;
