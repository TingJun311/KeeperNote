import React from "react";
import ReactDom from "react-dom";

export default function Footer() {
    const date = new Date();
    const curYear = date.getFullYear();

    return (
        <footer>
            <p>Copyright {curYear}</p>
        </footer>
    );
}
