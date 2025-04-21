// src/__tests__/NewTaskForm.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../components/App';
import { CATEGORIES } from '../components/data'; // Ensure the correct import path

test('adds a new item to the list when the form is submitted', async () => {
  render(<App />);

  // Count tasks with "Code" category before adding new task
  const codeCountBefore = screen.queryAllByText(/Code/).length;

  // Simulate filling out the form fields
  fireEvent.change(screen.getByLabelText(/Details/i), {
    target: { value: 'Pass the tests' },
  });

  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: 'Code' },
  });

  // Simulate form submission
  fireEvent.click(screen.getByText(/Add task/i));

  // Wait for the new task to be rendered in the task list
  await waitFor(() => {
    expect(screen.queryByText(/Pass the tests/)).toBeInTheDocument();
  });

  // Check that the count of tasks in the 'Code' category has increased
  expect(screen.queryAllByText(/Code/).length).toBe(codeCountBefore + 1);

  // Additional verification of task text
  expect(screen.queryByText(/Pass the tests/)).toBeInTheDocument();
});
