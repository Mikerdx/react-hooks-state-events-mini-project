// App.js
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskDetail, setTaskDetail] = useState("");
  const [category, setCategory] = useState("Code");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { detail: taskDetail, category }]);
    setTaskDetail(""); // Clear the input
  };

  return (
    <div className="App">
      <form onSubmit={handleAddTask}>
        <label>
          Details
          <input
            type="text"
            value={taskDetail}
            onChange={(e) => setTaskDetail(e.target.value)}
          />
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Code">Code</option>
            <option value="Food">Food</option>
            <option value="Money">Money</option>
            <option value="Misc">Misc</option>
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>

      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <div className="label">{task.category}</div>
            <div className="text">{task.detail}</div>
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
