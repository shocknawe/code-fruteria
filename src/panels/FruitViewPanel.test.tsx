import React from "react";
import { render, screen } from "@testing-library/react";
import { FruitViewPanel } from "./FruitViewPanel";

const setup = () => {
  render(
    <FruitViewPanel />
  );
};

describe("FruitViewPanel", () => {
  it("renders title", () => {
    setup();

    const titleElement = screen.getByText("Fruit View");

    expect(titleElement).toBeInTheDocument();
  });
});
