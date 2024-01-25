import {
  getAllByPlaceholderText,
  getAllByRole,
  render,
  screen,
} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should render Contact us component", () => {
  render(<Contact />);

  const heading = screen.getByText("Submit");
  expect(heading).toBeInTheDocument();
});

test("Should load button in Contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Should load input in Contact us component", () => {
  render(<Contact />);
  const input1 = screen.getByPlaceholderText("name");
  const input2 = screen.getByPlaceholderText("message");

  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
});

test("Should load 2 input in Contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox")
  
    expect(inputBoxes.length).toBe(2);
    
  });
