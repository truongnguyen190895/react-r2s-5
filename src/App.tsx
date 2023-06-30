import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodoItem: Todo = {
      id: todos.length + 1,
      title: title,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodoItem]);
  };

  const handleRemoveItem = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, newTitle: string) => {
    const newArray = [...todos];
    const index = newArray.findIndex((todo) => todo.id === id);
    newArray[index] = { ...newArray[index], title: newTitle };
    setTodos(newArray);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <section style={{ marginBottom: "10px" }}>
        <AddTodo handleAdd={handleAddTodo} />
      </section>
      <section>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
            onRemove={handleRemoveItem}
            onEdit={handleEdit}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
