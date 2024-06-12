// components/Todo.js
import React from 'react'
import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="todo">
        Add Todo
      </label>
      <input
        id="todo"
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button
        onClick={addTodo}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Todo
      </button>
      <ul className="mt-4 list-disc list-inside">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo