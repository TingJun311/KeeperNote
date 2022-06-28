import React from "react";

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                const { id } = props; // Get the id only when delete was pressed
                props.onDelete(id) // Pass in the id 
            }}>DELETE</button>
        </div>
    );
}

export default Note;
