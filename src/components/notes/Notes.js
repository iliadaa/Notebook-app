import React from "react";
import './Notes.scss';

function Notes(props) {

  return (
    <>
      <div className='note-container'>
        <div className='note-value-container'>
          <h3 className='note-value-title'>{props.value.title}</h3>
          <h6 className='note-value-description'>{props.value.description}</h6>
        </div>
        <div className="tags-value">
          <ul className="tag-notes-list">
            <li className="li-notes-tags">
              item 1
            </li>
            <li className="li-notes-tags">
              item 1
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Notes;
