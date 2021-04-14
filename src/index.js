import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleStatus = (id) => {
    const newTodos = [...todos];
    const toChange = newTodos.find((todo) => todo.id === id);
    toChange.isCompleted = !toChange.isCompleted;
    setTodos(newTodos);
  };

  const handleAdd = (res) => {
    const toPush = { id: todos.length + 1, title: res, isCompleted: false };
    const newTodos = [...todos];
    newTodos.push(toPush);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <TodoForm onSubmit={handleAdd} />
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} changeStatus={handleStatus}></Todo>
        ))}
      </ul>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
