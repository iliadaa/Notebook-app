import React from 'react'
import Notes from "../notes/Notes"
import './NotesList.scss';

function NotesList(props) {
    const allData = [props.notes]
    const alldata = [...allData[0]]

    console.log("all data", alldata)

    return (

        <div className='notes-list-container'>
            <div className='notes-list' >
                {alldata.map(note => (
                    <Notes key={note.key} value={note.value} id={note.id} />
                ))}
            </div>
        </div>

    )
}

export default NotesList