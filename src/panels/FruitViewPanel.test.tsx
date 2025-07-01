import React from "react";
import { render, screen } from "@testing-library/react";
import { FruitViewPanel } from "./FruitViewPanel";

const setup = () => {
  render(
    <FruitViewPanel />
  );
};

describe("FruitViewPanel", () => {
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

  it("renders title", () => {
    setup();

    const titleElement = screen.getByText("Fruit View");

    expect(titleElement).toBeInTheDocument();
  });
});
