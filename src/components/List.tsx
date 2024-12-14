import React, { useState } from "react";

const List = () => {
  //start with a default
  let InitialTodos = ["First Todo", "Second Todo", "Third Todo"];

  //two way data binding: on change, update the variable and re render
  const [todos, setTodos] = useState(InitialTodos);
  const [newTodo, setNewTodo] = useState(" ");
  return (
    <div>
      <h1>Todo List</h1>
      <label htmlFor="">
        <input
          type="text"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          value={newTodo}
        />
        <button
          type="submit"
          onClick={() => {
            setTodos([...todos, newTodo]);
          }}
        >
          SAVE
        </button>
      </label>
      <p>test: {newTodo}</p>
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
            <button
              onClick={() => {
                const nextTodos = todos.filter((_, i) => i !== index);
                setTodos(nextTodos);
              }}
            >
              DELETE
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
