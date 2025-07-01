// import necessary libraries
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

const setup = () => {
  render(<LoginComponent />);

  const username = screen.getByPlaceholderText("Enter your username");
  const password = screen.getByPlaceholderText("Enter your password");
  const loginButton = screen.getByRole("button", { name: "Login" });

  return {
    username,
    password,
    loginButton,
  };
};

describe("LoginComponent", () => {
  // to fix complain of missing window.matchMedia
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders title, username, password and button", () => {
    const { username, password, loginButton } = setup();

    const titleElement = screen.getByText("Login", { selector: "h2" });

    expect(titleElement).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should render error, on empty submit", async () => {
    const { loginButton } = setup();

    fireEvent.click(loginButton);

    await waitFor(() => {
      const usernameError = screen.getByText("Please input your username!");
      const passwordError = screen.getByText("Please input your password!");

      expect(usernameError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
    });
  });

  it("should render error, on empty submit", async () => {
    const { loginButton } = setup();

    fireEvent.click(loginButton);

    await waitFor(() => {
      const usernameError = screen.getByText("Please input your username!");
      const passwordError = screen.getByText("Please input your password!");

      expect(usernameError).toBeInTheDocument();
      expect(passwordError).toBeInTheDocument();
    });
  });

  // TODO: implement mock server for login
  it("should render invalid credentials, on invalid login", async () => {
    const { username, password, loginButton } = setup();

    fireEvent.change(username, { target: { value: "asdf" } });
    fireEvent.change(password, { target: { value: "asdf" } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const error = screen.getByText("Invalid credentials");

      expect(error).toBeInTheDocument();
    });
  });
});
