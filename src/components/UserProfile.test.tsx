import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";

const setup = () => {
  const mockOnLogout = jest.fn();
  const mockOnThemeToggle = jest.fn();

  const props = {
    onLogout: mockOnLogout,
    onThemeToggle: mockOnThemeToggle,
  }
  render(
    <UserProfile {...props} />
  )

  const userProfileButton = screen.getByTestId('user-profile-button');
  
  return {
    mockOnLogout,
    mockOnThemeToggle,
    userProfileButton,
  };
}

describe("UserProfile", () => {
  it("renders user profile button", () => {
    const { userProfileButton } = setup();

    expect(userProfileButton).toBeInTheDocument();
  });

  it("should open popup, on click of user profile button", () => {
    const { userProfileButton } = setup();

    fireEvent.click(userProfileButton);

    waitFor(() => {
      const popup = screen.getByTestId('user-profile-popup');
      expect(popup).toBeInTheDocument();
    });
  });
});
