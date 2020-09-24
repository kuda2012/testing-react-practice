import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import Counter from "./Counter";

it("renders Count without crashing", () => {
  render(<Counter />);
});

// it("playing with queries", () => {
//   const {
//     getAllByText,
//     getByText,
//     queryAllByText,
//     getByPlaceholderText,
//     getByLabelText,
//   } = render(<Counter />);
//   console.log(getByLabelText("Username"));
// console.log(getAllByText("count", { exact: false }));
// console.log(queryAllByText("count", { exact: false }));
// });

test("button increments counter", () => {
  const { getByText, debug } = render(<Counter />);
  debug();
  const h2 = getByText("Current count: 0");
  const btn = getByText("Add");
  fireEvent.click(btn);
  debugger;
  expect(h2).toHaveTextContent("1");
  expect(h2).not.toHaveTextContent("0");
});
