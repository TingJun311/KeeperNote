import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
