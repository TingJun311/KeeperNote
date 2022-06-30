import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";
import Title from "./component/Title";

const LOCAL_STORAGE_KEY = "noteK.app";

function App() {
    const [notes, setNotes] = useState([{}]); // An object inside an array

    useEffect(() => {
        // Trigger this function every time the states rendered
        // Get the item from local storage
        const getNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (getNotes) {
            setNotes(getNotes);
        }
    }, []);

    useEffect(() => {
        // If the notes value changes, only trigger this useEffect
        // To set to local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    const handleAddNote = (newNote) => {
        // When the add button was clicked
        // Get the prevNotes then add new notes
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    };
    const handleDelete = (noteId) => {
        // When the delete button was pressed
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => {
                return note.id !== noteId; // Return an array of objects without the selected id
            });
        });
    };

    return (
        <div>
            <Header />
            <Title />
            <CreateArea onAdd={handleAddNote} />
            {notes.map((note) => {
                // Map through the notes array then render dynamically
                const { id, title, content } = note;
                return (
                    id && (
                        <Note
                            key={id}
                            id={id}
                            title={title}
                            content={content}
                            onDelete={handleDelete}
                        />
                    )
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
