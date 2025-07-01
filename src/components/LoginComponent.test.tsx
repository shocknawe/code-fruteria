// import necessary libraries
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

const setup = () => {
  const mockOnLoginSuccess = jest.fn();

  render(<LoginComponent onLoginSuccess={mockOnLoginSuccess} />);

  const username = screen.getByPlaceholderText("Enter your username");
  const password = screen.getByPlaceholderText("Enter your password");
  const loginButton = screen.getByRole("button", { name: "Login" });

  return {
    username,
    password,
    loginButton,
    mockOnLoginSuccess,
  };
};

describe("LoginComponent", () => {
  it("renders title, username, password and button", () => {
    const { username, password, loginButton } = setup();

    const titleElement = screen.getByText("Login", { selector: "h2" });

    expect(titleElement).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should render error, on empty submit", () => {
    const { loginButton } = setup();

    fireEvent.click(loginButton);

    const usernameError = screen.getByText("Please input your username!");
    const passwordError = screen.getByText("Please input your password!");

    expect(usernameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("should render error, on empty submit", () => {
    const { loginButton } = setup();

    fireEvent.click(loginButton);

    const usernameError = screen.getByText("Please input your username!");
    const passwordError = screen.getByText("Please input your password!");

    expect(usernameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  // TODO: implement mock server for login
  it("should render invalid credentials, on invalid login", () => {
    const { username, password, loginButton } = setup();

    fireEvent.change(username, { target: { value: "asdf" } });
    fireEvent.change(password, { target: { value: "asdf" } });
    fireEvent.click(loginButton);

    const error = screen.getByText("Invalid credentials");

    expect(error).toBeInTheDocument();
  });

  // TODO: implement mock server for login
  it("should call onLoginSuccess, on valid login", () => {
    const { username, password, loginButton, mockOnLoginSuccess } = setup();

    fireEvent.change(username, { target: { value: "admin" } });
    fireEvent.change(password, { target: { value: "1234" } });
    fireEvent.click(loginButton);

    expect(mockOnLoginSuccess).toHaveBeenCalled();
  });
});
