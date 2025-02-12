import React from 'react';
import Note from './components/Note'
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes || []); // Initialize with props.notes or an empty array
  const [newNote, setNewNote] = useState('a new note...');

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Create a new note object
    const noteObject = {
      id: notes.length + 1, // Generate a unique ID (this is a simple approach; use a better ID generator in production)
      content: newNote,
      important: Math.random() < 0.5, // Randomly set importance
    };

    // Update the notes state with the new note
    setNotes(notes.concat(noteObject));

    // Clear the input field
    setNewNote('');
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;