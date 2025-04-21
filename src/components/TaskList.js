import React, { useState } from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  function handleDelete(deletedTask) {
    const updatedTasks = taskList.filter((task) => task.text !== deletedTask.text);
    setTaskList(updatedTasks);
  }

  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task key={index} task={task} deleteTask={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
