import React from "react";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No tasks found.</p>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <div className="todo-left">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.text}</span>
            </div>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              ✕
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
