import React from "react";
import ReactDom from "react-dom";

export default function Note(props) {
    return (
        <div className="note">
            <p>{props.key}</p>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}
