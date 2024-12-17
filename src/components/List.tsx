import React, { useState } from "react";
import CrossedList from "./CrossedList";
export type TodoObj = {
  todo: string;
  isDone: boolean;
};

const List = () => {
  //start with a default

  const newInitialTodos: Array<TodoObj> = [
    { todo: "First Todo", isDone: false },
  ];
  let InitialTodos = ["First Todo", "Second Todo", "Third Todo"];

  //two way data binding: on change, update the variable and re render
  const [todos, setTodos] = useState(InitialTodos);
  const [newTodo, setNewTodo] = useState(" ");
  const [neoTodos, setNeoTodos] = useState(newInitialTodos);
  const [neoTodo, setNeoTodo] = useState<TodoObj>({ todo: " ", isDone: false });
  return (
    <div className="container">
      <h1>Todo List</h1>
      <label htmlFor="">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (neoTodo.todo.trim().length > 0) {
                setNeoTodos([...neoTodos, neoTodo]);
                setNeoTodo({ todo: " ", isDone: false });
              }
              e.preventDefault();
            }
          }}
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
      <ol>
        {neoTodos.map((todo, index) => (
          <div key={index}>
            <CrossedList todo={todo} />
            <button
              onClick={() => {
                // make a new array
                // in that array, the todo that was clicked
                // should be done
                // [false,{todo:"hi",isDone:false}]
                const newArr = neoTodos.map((todo) => {
                  if (true) {
                    return { todo: todo.todo, isDone: true };
                  }
                  return todo;
                });
                setNeoTodos(newArr);
              }}
            >
              DELETE
            </button>

            <button onClick={() => console.log("Clicked")}>EDIT</button>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default List;
