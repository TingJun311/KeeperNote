import React from "react";
import ReactDom from "react-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import Notes from "./Note";

export default function App() {
    return (
        <>
            <Header />
            {Notes.map((note) => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            ))}
            <Footer />
        </>
    );
}
