import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should update the name state when input changes", () => {
  render(<App />);
  const input = screen.queryByPlaceholderText("Enter your name");
  const p = screen.queryByText("Hello");

  fireEvent.change(input, { target: { value: "John" } });
  expect(input.value).toBe("John");
  expect(p?.textContent).toBe("Hello John");
});

describe("render todo-list", () => {
  test("should render todo-list", () => {
    render(<App />);
    const todos = screen.getAllByTestId("todo-item");
    expect(todos.length).toBe(3);
  });

  test("should render more todo-list then add new todo", () => {
    render(<App />);
    const input = screen.queryByPlaceholderText("what's your plan ?");
    fireEvent.change(input, { target: { value: "buy a new car" } });
    fireEvent.submit(input);
    const todos = screen.getAllByTestId("todo-item");
    expect(todos.length).toBe(4);
  });

  test("should render less todo-list then delete one of them", () => {
    render(<App />);
    const todo = screen.getAllByTestId("todo-item")[0];
    const btn = within(todo).getByTestId("remove-todo");
    fireEvent.click(btn);
    const todos = screen.getAllByTestId("todo-item");
    expect(todos.length).toBe(2);
  });
});
