import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright ⓒIsaac Corp {year}</p>
        </footer>
    );
}

export default Footer;