

import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoInput() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
    console.log(todos);
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    console.log("index inside the delete todo fucntion",index)
  };
  const updateTodo = (index, newTodo) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? newTodo : todo));
    setTodos(updatedTodos);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      addTodo(input);
      setInput("");
  };

  return (
    <div className='p-4 max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='flex'>
        <input
          type='text'
          placeholder='Enter the Todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-black rounded p-3"
        />
        <button type='submit'  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 ">+</button>
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      
      
    </div>
  );
}

export default TodoInput;
