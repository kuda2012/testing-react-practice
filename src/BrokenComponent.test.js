import React from "react";
import { render } from "@testing-library/react";
import BrokenComponent from "./BrokenComponent";

it("attempts to render BrokenComponent and crashes", () => {
  render(<BrokenComponent />);
});
