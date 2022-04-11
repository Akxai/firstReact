import React, {useState} from "react";
import Heading from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";
import "../css/styles.css";

// import notes from "../notes";

// function createNote(note) {
//   return <Note
//   key={note.key}
//   heading={note.title}
//   body={note.content}
//   />
// }

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return <div>
  <Heading />
  <CreateArea onAdd={addNote} />
  {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />;
      })}
  <Footer />
  </div>
}

export default App;
