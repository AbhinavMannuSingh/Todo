
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
