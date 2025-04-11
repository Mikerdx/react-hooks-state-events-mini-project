import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm"; // Assuming TaskForm is your form component for adding tasks

const CATEGORIES = ['All', 'Code', 'Food', 'Money', 'Misc'];

const TASKS = [
  { text: 'Buy rice', category: 'Food' },
  { text: 'Save a tenner', category: 'Money' },
  { text: 'Build a todo app', category: 'Code' },
  { text: 'Build todo API', category: 'Code' },
  { text: 'Get an ISA', category: 'Money' },
  { text: 'Cook rice', category: 'Food' },
  { text: 'Tidy house', category: 'Misc' }
];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks={filteredTasks} />
      <TaskForm onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;
