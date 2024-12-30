"use client";
import { useState } from "react";
import EditInput from "./EditInput";
import { log } from "console";
import Buttons from "./Buttons";

type TodoObj = {
  text: string;
  done: boolean;
};

const NewList = () => {
  const [todos, setTodos] = useState<TodoObj[]>([
    {
      text: "",
      done: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState<TodoObj>({ text: "", done: false });

  const handleAddTodo = () => {
    if (newTodo.text.trim()) {
      const todo: TodoObj = {
        text: newTodo.text.trim(),
        done: false,
      };
      console.log([...todos]);
      setTodos([...todos, todo]);
      setNewTodo({ text: " ", done: false });
    }
  };

  return (
    <div className="flex h-72 max-h-96 flex-col gap-3 rounded border-2 border-solid border-lime-800 p-4">
      <h1 className="text-center text-3xl">My Todo List</h1>
      <label htmlFor="">
        <input
          className="border-1 border-solid border-black"
          type="text"
          placeholder="write here..."
          value={newTodo.text}
          onChange={(e) => {
            const todo: TodoObj = {
              text: e.target.value,
              done: false,
            };

            setNewTodo(todo);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <Buttons buttonClass="blue" onClick={handleAddTodo}>
          SAVE
        </Buttons>
      </label>
      <ol className="list-decimal overflow-y-auto">
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo.text}</li>
            <div className="flex gap-3">
              <Buttons
                buttonClass="red"
                onClick={() => {
                  const filtered = todos.filter(
                    (_, Filtrindex) => Filtrindex !== index,
                  );
                  setTodos(filtered);
                }}
              >
                DELETE
              </Buttons>
              <EditInput
                index={index}
                onSave={(text, index) => {
                  const newTodos: TodoObj[] = todos.map((todo, i) => {
                    if (i === index) {
                      return { text: text, done: false };
                    }
                    return todo;
                  });
                  setTodos(newTodos);
                }}
                text={todo.text}
              />
              <Buttons buttonClass="green">DONE</Buttons>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default NewList;
