import React, { useState } from "react";

type TodoListObj = {
  todo: string[];
  isDone: boolean;
};

const NewList = () => {
  let myTodos = " ";
  const [todos, setTodos] = useState(myTodos);
  return (
    <>
      <h1>My Todo List</h1>
      <label htmlFor="">
        <input
          type="text"
          placeholder="write here..."
          onChange={(e) => {
            const iTodo = e.target.value;
            setTodos(iTodo);
          }}
        />
        <button type="submit">SAVE</button>
      </label>
      <ul>
        <li>{todos}</li>
      </ul>
    </>
  );
};

export default NewList;
