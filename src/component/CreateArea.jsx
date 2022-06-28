
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function CreateArea(props) {
    const [note, setNotes] = useState({
        title: "",
        content: "",
    })

    const handleType = (e) => {
        const { value, name } = e.target;
        
        setNotes(prevNotes => {
            return ({
                ...prevNotes,
                id: uuidv4(),
                [name]: value,
            })
        })
    }

    const addNote = () => {
        const { title, content } = note;

        if (title || content) {
            props.onAdd(note);
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
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;