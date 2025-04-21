import '@testing-library/jest-dom';

import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import CategoryFilter from "../components/CategoryFilter";

describe("CategoryFilter", () => {
  const categories = ["All", "Code", "Food", "Money", "Misc"];

  test("renders a button for each category", () => {
    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="All"
        onCategoryChange={() => {}}
      />
    );

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test("clicking a category button calls onCategoryChange and adds 'selected' class", () => {
    const mockOnCategoryChange = jest.fn();
    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="Food"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    const foodButton = screen.getByText("Food");
    fireEvent.click(foodButton);

    expect(mockOnCategoryChange).toHaveBeenCalledWith("Food");
    expect(foodButton).toHaveClass("selected");
  });
});
