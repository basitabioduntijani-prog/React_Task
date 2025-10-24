import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
