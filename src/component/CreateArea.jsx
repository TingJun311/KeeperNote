
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // to set unique id to all note

function CreateArea(props) {
    const [note, setNotes] = useState({
        title: "",
        content: "",
    })

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
                onSubmit={(e) => {
                    // Prevent the page refresh when the form submit
                    e.preventDefault();
            }}>
                <input 
                    name="title" 
                    placeholder="Title" 
                    value={note.title}
                    onChange={handleType}
                />
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    rows="3"
                    value={note.content} 
                    onChange={handleType}
                />
                <button 
                    onClick={addNote}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;