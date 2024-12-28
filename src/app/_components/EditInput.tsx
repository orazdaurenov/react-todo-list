import React, { useState } from "react";

export type RenderTodoProps = {
  text: string;
  onSave: (text: string, index: number) => void;
  index: number;
};

const RenderTodo = ({ text, onSave, index }: RenderTodoProps) => {
  const [changed, setChanged] = useState(false);
  const [newTodo, setNewTodo] = useState(text);

  if (changed) {
    return (
      <>
        <input
          type="text"
          name=""
          id=""
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            // Repalce an existing todo:
            // 1) Find a way to identify the todo that needs to be replaced from the todo array
            //    - 1b: get current index from the todos arr ✔️
            onSave(newTodo, index);
            setChanged(false);
          }}
        >
          SAVE
        </button>
      </>
    );
  }
  return <button onClick={() => setChanged(true)}>EDIT</button>;
};

export default RenderTodo;
