import React, { useState } from 'react'

import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateNote from './CreateNote'

export default function App() {
  const [notes, setNotes] = useState([]);

  // newNote variable comes from CreateNote's submitNote function (originally 'note')
  function addNote(newNote) {
    setNotes(prevNotes => {
      return[...prevNotes, newNote];
    });
  }
  
  // returns previous notes where index is not equal to id
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {/* Renders Header component */}
      <Header />
      {/* Renders CreateNote element - passes addNote function to child (CreateNote)*/}
      <CreateNote onAdd={addNote}/>
      {/* for each of the note items in the notes array */}
      {/* map function loops through array and executes function*/}
      {/* index comes from map function */}
      {notes.map((noteItem, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  )
}
