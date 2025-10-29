import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import ItemForm from "../components/ItemForm";
import App from "../App";

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  fireEvent.change(screen.queryByLabelText(/Name/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.queryByText(/Add to List/));

  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  // Get initial count of dessert items
  const initialDessertCategories = screen.getAllByText((content, element) => {
    return content === "Dessert" && element.className === "category";
  }).length;

  // Find and fill out the form
  const form = screen.getByTestId("item-form");
  const nameInput = screen.getByTestId("name-input");
  const categorySelect = screen.getByTestId("category-select");

  fireEvent.change(nameInput, {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(categorySelect, {
    target: { value: "Dessert" },
  });

  // Submit the form
  fireEvent.submit(form);

  // Verify new item appears in the list
  expect(screen.getByText("Ice Cream")).toBeInTheDocument();

  // Verify dessert category count increased
  const finalDessertCategories = screen.getAllByText((content, element) => {
    return content === "Dessert" && element.className === "category";
  }).length;
  expect(finalDessertCategories).toBe(initialDessertCategories + 1);
});
