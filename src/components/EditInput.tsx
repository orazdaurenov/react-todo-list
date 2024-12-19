import React, { useState } from "react";

export type RenderTodoProps = {
  text: string;
  onSave: (e: string) => void;
};

const RenderTodo = ({ text, onSave }: RenderTodoProps) => {
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
            onSave(newTodo);
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
