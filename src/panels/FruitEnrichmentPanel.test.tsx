import React from "react";
import { render, screen } from "@testing-library/react";
import FruitEnrichmentPanel from "./FruitEnrichmentPanel";

const setup = () => {
  const mockOnClose = jest.fn();

  render(
    <FruitEnrichmentPanel
      fruit={{
        id: "F001",
        name: "Banana",
        country: "Ecuador",
        type: "Tropical",
        status: "Available",
        details: "Organic, Fair Trade",
      }}
      onClose={mockOnClose}
    />
  );

  return {
    mockOnClose,
  };
};

describe("FruitEnrichmentPanel", () => {
  it("renders title", () => {
    setup();

    const titleElement = screen.getByText("Banana Enrichment");

    expect(titleElement).toBeInTheDocument();
  });
});
