import React from "react";
import { render } from "@testing-library/react";
import { GridDropOverlay } from "./GridDropOverlay";

const setup = () => {
  const props = {
    rows: 2,
    cols: 2,
    activeCell: null,
    visible: false,
  };

  render(<GridDropOverlay {...props} />);
};

describe("GridDropOverlay", () => {
  it("renders without error", () => {
    setup();
  });
});
