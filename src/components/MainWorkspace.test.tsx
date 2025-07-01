import React from "react";
import { render, screen } from "@testing-library/react";
import { MainWorkspace } from "./MainWorkspace";

const setup = () => {
  const mockOnDrop = jest.fn();
  const mockOnDragOver = jest.fn();
  const mockOnGridDropInfo = jest.fn();

  const props = {
    onDrop: mockOnDrop,
    onDragOver: mockOnDragOver,
    onGridDropInfo: mockOnGridDropInfo,
    gridRows: 2,
    gridCols: 2,
  };

  render(
    <MainWorkspace {...props}>
      <p>sample text</p>
    </MainWorkspace>
  );

  return {
    mockOnDrop,
    mockOnDragOver,
    mockOnGridDropInfo,
  };
};

describe("MainWorkspace", () => {
  it("render children", () => {
    setup();

    const sampleChild = screen.getByText("sample text");
    expect(sampleChild).toBeInTheDocument();
  });
});
