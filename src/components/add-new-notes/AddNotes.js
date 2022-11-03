import React from 'react'
import "./AddNotes.scss"
import AddIcon from '@mui/icons-material/Add';

function AddNotes() {
    return (
        <div className='notes-container'>
            <div className='text-notes'>
                <textarea placeholder="Add a new notes..." />
            </div>
            <button className='notes-button'>
                <AddIcon style={{ color: 'rgb(255, 100, 157)', fontSize: 50 }} />
            </button>
        </div>
    )
}

export default AddNotes
