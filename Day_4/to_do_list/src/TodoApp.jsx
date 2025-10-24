import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import "./App.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Toggle complete status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const total = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="todo-app">
      <div className="todo-box">
        <h1 className="title">📝 My Todo List</h1>

        <TodoInput onAdd={addTodo} />

        <TodoFilter filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />

        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

        <p className="stats">
          Total: <strong>{total}</strong> | Completed:{" "}
          <strong>{completedCount}</strong>
        </p>
      </div>
    </div>
  );
}
