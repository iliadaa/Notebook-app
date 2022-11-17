import React, { useState } from "react";
import AddTags from "../add-tags/AddTags";
import "./AddNotes.scss";
let nextId = 0;

function Notes(props) {
  const [inputNotes, setInputNotes] = useState({
    title: "",
    description: "",
  });

  const [tags, setTags] = useState([]);

  const getTags = (info) => {
    setTags((tags) => [...tags, info]);
  };

  const removeTags = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setInputNotes({
      ...inputNotes,
      [name]: value,
    });
    e.preventDefault();
  };

  const Submit = (e) => {
    if (
      inputNotes.title.trim().length &&
      inputNotes.description.trim().length !== 0
    ) {
      props.getNotes({
        value: inputNotes,
        id: nextId++,
        key: Date.now(),
        tag: tags,
      });
    }
    setInputNotes({
      title: "",
      description: "",
    });
    setTags([""]);
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
              {tags.map((showTag, index) => (
                <li key={index}>
                  {showTag}
                  <button type="button" onClick={() => removeTags(index)}>
                    +
                  </button>
                </li>
              ))}
            </ul>
            <AddTags getTags={getTags} />
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
