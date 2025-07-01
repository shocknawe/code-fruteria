import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPanel from "./AboutPanel";

const setup = () => {
  render(<AboutPanel />);
};

describe("AboutPanel", () => {
  it("renders title and content", () => {
    setup();

    const titleElement = screen.getByText("About");
    const content = screen.getByText(/Welcome to/i);

    expect(titleElement).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
