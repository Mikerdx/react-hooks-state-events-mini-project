// Assuming CategoryFilter component renders buttons for categories

import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../CategoryFilter"; // Update this path based on your file structure
import React from "react";

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<CategoryFilter />);
  
  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });
  
  fireEvent.click(codeButton); // Trigger click on the button

  expect(codeButton.classList).toContain("selected");  // Verify 'selected' class is added
  expect(allButton.classList).not.toContain("selected"); // Verify 'selected' class is removed from "All"
});

test("clicking the category button filters the task list", () => {
  render(<CategoryFilter />);

  const codeButton = screen.queryByRole("button", { name: "Code" });
  
  fireEvent.click(codeButton);  // Trigger click on the "Code" category

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<CategoryFilter />);

  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(allButton);  // Trigger click on "All" category

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
});
