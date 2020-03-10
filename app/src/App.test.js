import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("it displays a button with the text 'hit'", () => {
  const { getByText } = render(<App />);
  getByText(/hit/i);
});

test("it displays a 1 when click on ball", () => {
  const { getAllByText, getByTestId } = render(<App />);
  fireEvent.click(getAllByText(/ball/i)[1]);
  expect(getByTestId("display-ball")).toHaveTextContent("1");
});

test("balls resets to 0 if clicked 4 times", () => {
  const { getAllByText, getByTestId } = render(<App />);
  for (let i = 0; i < 4; i++) {
    fireEvent.click(getAllByText(/ball/i)[1]);
  }
  expect(getByTestId("display-ball")).toHaveTextContent("0");
});
