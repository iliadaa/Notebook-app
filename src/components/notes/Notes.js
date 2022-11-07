import React from "react";
import './Notes.scss';


function Notes(props) {
  // console.log(props)

  return (
    <>
      <div className='note-container'>
        <div className='note-value-container'>
          <h2 className='note-value'>{props.value}</h2>
        </div>
      </div>
    </>
  );
}

export default Notes;
