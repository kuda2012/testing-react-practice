import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Toggler from "./Toggler";

it("should toggle", () => {
  const { getByText } = render(<Toggler />);
  const heading = getByText("Hello World");
  expect(heading).toBeInTheDocument();
  const btn = getByText("Toggle");
  fireEvent.click(btn);
  expect(heading).not.toBeInTheDocument();
});
