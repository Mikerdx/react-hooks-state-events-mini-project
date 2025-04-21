import React from "react";

function Task({ task, deleteTask }) {
  const { text, category } = task;

  function handleDeleteClick() {
    deleteTask(task);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
