import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function clearText() {
    setText('');
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={clearText}>Clear</button>
      <h2>{text}</h2>
    </>
  );
}

export default App;
