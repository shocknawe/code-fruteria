import React from "react";
import { render, screen } from "@testing-library/react";
import FruitBook from "./FruitBookPanel";

const setup = () => {
  render(<FruitBook />);
};

describe("FruitBook", () => {
  it("renders title", () => {
    setup();

    const titleElement = screen.getByText("Fruit Book");

    expect(titleElement).toBeInTheDocument();
  });
});
