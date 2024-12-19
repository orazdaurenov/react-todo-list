import React, { useState } from "react";

export type RenderTodoProps = {
  text: string;
  onSave: () => void;
};

const RenderTodo = ({ text, onSave }: RenderTodoProps) => {
  const [changed, setChanged] = useState(false);

  if (changed) {
    return (
      <>
        <input type="text" name="" id="" value={text} />
        <button type="submit" onClick={onSave}>
          SAVE
        </button>
      </>
    );
  }
  return <button onClick={() => setChanged(true)}>EDIT</button>;
};

export default RenderTodo;
