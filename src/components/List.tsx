import React, { useState } from "react";

const List = () => {
  //start with a default
  type TodoObj = {
    todo: string;
    isDone: boolean;
  };

  const newInitialTodos: Array<TodoObj> = [
    { todo: "First Todo", isDone: false },
  ];
  let InitialTodos = ["First Todo", "Second Todo", "Third Todo"];

  //two way data binding: on change, update the variable and re render
  const [todos, setTodos] = useState(InitialTodos);
  const [newTodo, setNewTodo] = useState(" ");
  const [neoTodos, setNeoTodos] = useState(newInitialTodos);
  const [neoTodo, setNeoTodo] = useState<TodoObj>({ todo: "", isDone: false });
  return (
    <div>
      <h1>Todo List</h1>
      <p>neo stuff</p>
      <label htmlFor="">
        <input
          type="text"
          onChange={(e) => {
            // {todo:string, isDone: boolean}
            // {key:value}
            const nextTodoObj: TodoObj = {
              todo: e.target.value,
              isDone: false,
            };
            setNeoTodo(nextTodoObj);
          }}
          value={neoTodo.todo}
        />
        <button
          type="submit"
          onClick={() => {
            setNeoTodos([...neoTodos, neoTodo]);

            setNeoTodo({ todo: " ", isDone: false });
          }}
        >
          SAVE
        </button>
      </label>
      <ul>
        {neoTodos.map((todo, index) => (
          <div key={index}>
            <li>{todo.todo}</li>
            <button
              onClick={() => {
                const nextTodos = neoTodos.filter((_, i) => i !== index);
                setNeoTodos(nextTodos);
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
