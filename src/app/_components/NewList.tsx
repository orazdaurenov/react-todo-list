"use client";
import { useState } from "react";
import EditInput from "./EditInput";

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
        <button type="submit" onClick={handleAddTodo}>
          SAVE
        </button>
      </label>
      <ol className="list-decimal">
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const filtered = todos.filter(
                    (_, Filtrindex) => Filtrindex !== index,
                  );
                  setTodos(filtered);
                }}
              >
                DELETE
              </button>
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
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default NewList;
