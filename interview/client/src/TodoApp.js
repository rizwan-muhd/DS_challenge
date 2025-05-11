import { CheckBox } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    if (todo.trim() === "") return;
    const item = {
      id: todos.length + 1,
      value: todo,
      status: false,
    };
    setTodos((pre) => [...pre, item]);
    setTodo("");
  };

  const handleStatusChange = (id) => {
    setTodos(
      todos.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            status: !data.status,
          };
        }
        return data;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((data) => {
        return id !== data.id;
      })
    );
  };

  console.log(todos);
  return (
    <div>
      <h4>Todo App</h4>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodos}>Add Todo</button>

      <h5>Todos</h5>
      <ul>
        {todos.map((data, index) => (
          <>
            <li>
              <input
                type="checkbox"
                checked={data.status}
                key={data.id}
                onClick={() => handleStatusChange(data.id)}
              />
              <span
                style={{ textDecoration: data.status ? "line-through" : "" }}
              >
                {" "}
                {data.value}
              </span>
              <button onClick={() => handleDelete(data.id)}>delete</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
