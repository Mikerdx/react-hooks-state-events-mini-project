import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State to hold the form data
  const [task, setTask] = useState({
    text: "",
    category: categories[0], // Default to the first category
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(task); // Call the callback with the task data
    setTask({ text: "", category: categories[0] }); // Reset form after submission
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={task.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={task.category}
          onChange={handleInputChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
