import React, { useState } from 'react';
import Task from './Task'; // Import the Task component

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const deleteTask = (taskToDelete) => {
    setTaskList((prevTasks) => prevTasks.filter(task => task !== taskToDelete));
  };

  return (
    <div>
      {taskList.map((task, index) => (
        <Task key={index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
