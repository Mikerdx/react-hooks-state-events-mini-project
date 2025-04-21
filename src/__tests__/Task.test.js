
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../components/Task';

const task = { category: 'Code', text: 'Build a React app' };

test('displays the task text', () => {
  render(<Task task={task} deleteTask={() => {}} />);

  // Check if the text is rendered correctly
  expect(screen.getByText('Build a React app')).toBeInTheDocument();
});

test('displays the task category', () => {
  render(<Task task={task} deleteTask={() => {}} />);

  // Check if the category is rendered correctly
  expect(screen.getByText('Code')).toBeInTheDocument();
});

test('is removed from the list when the delete button is clicked', () => {
  const deleteTask = jest.fn();
  render(<Task task={task} deleteTask={deleteTask} />);

  const deleteButton = screen.getByText('X');
  fireEvent.click(deleteButton);

  // Check if deleteTask was called with the correct task
  expect(deleteTask).toHaveBeenCalledWith(task);
});
