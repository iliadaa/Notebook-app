import React from 'react'
import Notes from "../notes/Notes"
import DummyNotes from "../../dummyNotes.json"
import './NotesList.scss';

function NotesList(props) {
    const allData = [props.notes]
    const alldata = [...allData[0]]

    console.log("all data", alldata)

    console.log(DummyNotes, "helo")

    return (

        <div className='notes-list-container'>
            <div className='notes-list' >
                {DummyNotes.map(note => (
                    <Notes key={note.key} value={note.description} id={note.id} />
                ))}
            </div>
            <div className='notes-list' >
                {alldata.map(note => (
                    <Notes key={note.key} value={note.value} id={note.id} />
                ))}
            </div>
        </div>

    )
}

export default NotesList