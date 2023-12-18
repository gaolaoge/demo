import { Todo } from "./Todo";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

describe("should render new Todo", () => {
  test("add new todo", () => {
    const todo = {
      index: 9,
      text: "Learn about React",
      isCompleted: false
    };
    render(<Todo todo={todo} index={todo.index} toggleTodo={jest.fn()} removeTodo={jest.fn()} />);
    const res = screen.queryByText(todo.text);
    expect(res).toBeInTheDocument();
  });

  test("should toggle todo", () => {
    const todo = {
      index: 9,
      text: "Learn about React",
      isCompleted: false
    };
    const toggleTodo = jest.fn();
    render(<Todo todo={todo} index={todo.index} toggleTodo={toggleTodo} removeTodo={jest.fn()} />);
    userEvent.click(screen.getByText("Complete"));
    expect(toggleTodo).toHaveBeenCalledTimes(1);
  });

  test("should remove todo", () => {
    const todo = {
      index: 9,
      text: "Learn about React",
      isCompleted: false
    };
    const removeTodo = jest.fn();
    render(<Todo todo={todo} index={todo.index} toggleTodo={jest.fn()} removeTodo={removeTodo} />);
    userEvent.click(screen.getByText("x"));
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });
});
