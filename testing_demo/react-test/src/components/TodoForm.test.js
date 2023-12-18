import { TodoForm } from "./TodoForm";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("should render TodoForm", () => {
  test("should not create new Todo when input empty", () => {
    const addTodo = jest.fn();
    render(<TodoForm addTodo={addTodo} />);
    const input = screen.getByPlaceholderText("what's your plan ?");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.submit(input);
    expect(addTodo).not.toBeCalled();
  });

  test("should create new Todo when input not empty", () => {
    const addTodo = jest.fn();
    render(<TodoForm addTodo={addTodo} />);
    const input = screen.getByPlaceholderText("what's your plan ?");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.submit(input);
    expect(addTodo).toHaveBeenCalledWith("test");
  });
});
