import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../TaskList'; // Adjust path if needed

const tasks = [
  { category: 'Code', text: 'Build a React app' },
  { category: 'Home', text: 'Buy rice' }
];

test('displays the task text', () => {
  render(<TaskList tasks={tasks} />);

  expect(screen.getByText('Build a React app')).toBeInTheDocument();
  expect(screen.getByText('Buy rice')).toBeInTheDocument();
});

test('is removed from the list when the delete button is clicked', () => {
  render(<TaskList tasks={tasks} />);

  const deleteButton = screen.getAllByText('X')[0]; // Get the delete button for the first task
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Build a React app')).not.toBeInTheDocument();
  expect(screen.getByText('Buy rice')).toBeInTheDocument();
});
