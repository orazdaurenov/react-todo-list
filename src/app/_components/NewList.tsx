"use client";
import { useState } from "react";
import EditInput from "./EditInput";
import { log } from "console";
import Buttons from "./Buttons";

const NewList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl">My Todo List</h1>
      <label htmlFor="">
        <input
          type="text"
          placeholder="write here..."
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
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
      <ol className="list-decimal">
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
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
                  const newTodos = todos.map((todo, i) => {
                    if (i === index) {
                      return text;
                    }
                    return todo;
                  });
                  setTodos(newTodos);
                }}
                text={todo}
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
