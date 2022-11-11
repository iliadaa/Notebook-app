import React, { useState } from "react";
import "./AddNotes.scss";
let nextId = 0;

function Notes(props) {
  const [inputNotes, setInputNotes] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setInputNotes({
      ...inputNotes,
      [name]: value,
    });
    e.preventDefault();
  };

  const Submit = (e) => {
    props.getNotes({
      value: inputNotes,
      id: nextId++,
      key: Date.now(),
    });
    setInputNotes({
      title: "",
      description: "",
    });
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
              name="title"
              value={inputNotes.title}
              onChange={handleSubmit}
            />
          </div>
          <div className="description-notes display">
            <label className="label">Description:</label>
            <textarea
              className="input"
              name="description"
              value={inputNotes.description}
              onChange={handleSubmit}
            />
          </div>
          <div className="tags-notes display">
            <label className="label">Tags:</label>
            <ul className="input-tag-notes-list">
              <li>
                item 1
                <button type="button">
                  +
                </button>
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
