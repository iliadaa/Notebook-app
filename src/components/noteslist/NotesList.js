import React from 'react'
import Notes from "../notes/Notes"
import DummyNotes from "../../dummyNotes.json"
import './NotesList.scss';

function NotesList(props) {
    const { notes } = props

    return (
        <div className='notes-list-container'>
            <div className='notes-list' >
                {DummyNotes.map((note, index) => (
                    <Notes key={index} value={note} id={note.id} tag={note.tags} />
                ))}
            </div>
            <div className='notes-list' >
                {notes.map((note, index) => (
                    <Notes key={index} value={note.value} tag={note.tag} />
                ))}
            </div>

        </div>

    )
}

export default NotesList