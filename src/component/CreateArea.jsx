
import React, { useState } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Zoom from '@mui/material/Zoom';
import Fab from '@material-ui/core/Fab';
import { v4 as uuidv4 } from 'uuid'; // to set unique id to all note

function CreateArea(props) {
    const [note, setNotes] = useState({
        title: "",
        content: "",
    })

    const [isPress, setIsPress] = useState(false); // Default input settings
    const extendTextBox = () => {
        setIsPress(curConditions => {
            return !curConditions // Revert current conditions
        })
    }

    const handleType = (e) => {
        // When user entering text box
        const { value, name } = e.target;
        
        setNotes(prevNotes => {
            // Get hold of the prev notes and set with a new value and id
            return ({
                ...prevNotes,
                id: uuidv4(),
                [name]: value, // Set the properties depending on the name
                // That is why the name in the component are very important
            })
        })
    }

    const addNote = () => {
        //  Handle the note when user add a note
        const { title, content } = note;

        if (title || content) {
            // Only trigger props functions when either title or content its not empty
            props.onAdd(note);

            // Once add reset the input field
            setNotes({
                title: "",
                content: "",
            })
        }
    }

    return (
        <div>
            <form
                className="create-note"
                onSubmit={(e) => {
                    // Prevent the page refresh when the form submit
                    e.preventDefault();
            }}>
                <input 
                    name="title" 
                    placeholder="Title" 
                    value={note.title}
                    onChange={handleType}
                    onClick={extendTextBox}
                />
                {isPress && 
                // When isPress is true render textarea
                    <textarea 
                        name="content" 
                        placeholder="Take a note..." 
                        rows="3"
                        value={note.content} 
                        onChange={handleType}
                />}
                <Zoom in={isPress}>
                    <Fab 
                        onClick={addNote}
                        >
                        <AddBoxIcon />
                    </Fab>
                </Zoom>              
            </form>
        </div>
    );
}

export default CreateArea;