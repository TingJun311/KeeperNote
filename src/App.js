import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";

function App() {
    const [notes, setNotes] = useState([{}])

    const handleAddNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }
    const handleDelete = (noteId) => {
        setNotes(prevNotes => {
            return prevNotes.filter(note => {
                return note.id !== noteId // Return an array of objects without the selected id
            })
        })
    }

  return (
    <div>
        <Header />
        <CreateArea
            onAdd={handleAddNote}
        />
        {notes.map(note => {
            const { id, title, content } = note;
            return (
                id &&
                <Note
                    key={id} 
                    id={id}
                    title={title}
                    content={content}
                    onDelete={handleDelete}
                />
            )
        })}
        <Footer />
    </div>
  );
}

export default App;
