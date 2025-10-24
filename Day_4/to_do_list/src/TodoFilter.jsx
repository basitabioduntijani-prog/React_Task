import React from "react";

export default function TodoFilter({ filter, setFilter, clearCompleted }) {
  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button className="clear-btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
