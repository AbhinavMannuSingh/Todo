
import React, { useState } from 'react';
function TodoItem({ todo, index, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const handleClick = () => {
    console.log('Handle clicked is called on update');
    console.log("Index of the element which is being updated is", index);
    updateTodo(index, newTodo);
    console.log(isEditing);
    setIsEditing(false);
    console.log("handle click",isEditing)
    console.log("handle click")
  };
  const handleEditing=()=>{
    setNewTodo(todo)
    setIsEditing(!isEditing)
  }
  return (
    <div className="mb-4 mt-4 p-4 border rounded-lg bg-gray-500">
      {isEditing ? (
        <div >
          <input
            type='text'
            value={newTodo}
            onChange={(e) => {setNewTodo(e.target.value)
              console.log(e.target.value)
            }}
            className="border border-gray-300 px-2 py-1 rounded"
            
          />
          <button
            onClick={handleClick}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 "
          >
            Save
          </button>
        </div>
      ) : (
        <div className='flex justify-between items-center justify-center'>
          <p className="text-gray-800 font-bold">{todo}</p>
          <div className='flex space-x-2 mt-4'>
            <button
              onClick={() => {
                deleteTodo(index);
                console.log("Index inside todoitem while deleting todo", index);
              }}
              className="px-3 py-1 bg-red-600 text-white rounded border border-red-600 hover:bg-red-700 "
            >
              X
            </button>
            <button
              // onClick={() => {setIsEditing(!isEditing)
              //   console.log('value of new Todo',newTodo);
              //   console.log('value of todo',todo)
              // } 
              onClick={handleEditing
              }
              className="px-3 py-1 bg-blue-600 text-white rounded border border-blue-600 hover:bg-blue-700 "
              
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
