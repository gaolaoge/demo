import React from "react";

export function Todo({ todo, index, toggleTodo, removeTodo }) {
  const toggleText = todo.isCompleted ? "Redo" : "Complete";
  return (
    <div className="todo" data-testid="todo-item" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}

      <div>
        <button onClick={() => toggleTodo(index)}>{toggleText}</button>
        <button data-testid="remove-todo" data-cy="remove" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
}
