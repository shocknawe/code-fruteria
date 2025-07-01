// ThemeProvider isn't used yet

import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";

describe("ThemeProvider", () => {
  it("renders children in light mode", () => {
    render(
      <ThemeProvider mode="light">
        <p>sample text</p>
      </ThemeProvider>
    );
    const sampleChild = screen.getByText("sample text")
    expect(sampleChild).toBeInTheDocument();
  });

  it("renders children in dark mode", () => {
    render(
      <ThemeProvider mode="dark">
        <p>sample text</p>
      </ThemeProvider>
    );
    const sampleChild = screen.getByText("sample text")
    expect(sampleChild).toBeInTheDocument();
  });
});
