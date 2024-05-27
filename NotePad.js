import React, { useState } from 'react';

const NotePad = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote.trim()]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Notepad</h2>
      <div style={{ textAlign: 'center' }}>
        <input 
          type="text" 
          value={newNote} 
          onChange={(e) => setNewNote(e.target.value)} 
          placeholder="Enter note" 
          style={{ padding: '5px', marginRight: '5px' }} 
        />
        <button onClick={addNote}>Add</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
        {notes.map((note, index) => (
          <li key={index}>
            {note} 
            <button onClick={() => deleteNote(index)} style={{ marginLeft: '5px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotePad;
