import React, { useState } from 'react';

function Todo() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function addTodo() {
    
      setTodos([...todos, text]);
      setText('');
    
  }

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Add a new todo" 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
