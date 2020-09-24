import React from "react";
import { render } from "@testing-library/react";
import FixedComponent from "./FixedComponent";

it("renders Fixed Component without crashing", () => {
  render(<FixedComponent />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<FixedComponent />);
  expect(asFragment()).toMatchSnapshot();
});
