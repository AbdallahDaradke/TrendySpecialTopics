import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function taskList({ tasks, setTasks }) {
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const [count, setCount] = useState(0);
  const handleDelete = (taskId) => {
    // setTasks(tasks.filter((task) => task.id !== taskId));
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Router>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span key={task.id} onClick={() => toggleTask(task.id)}>
                {task.text} {task.completed ? "✔️" : "❌"}{" "}
              </span>
              <span key={task.id} onClick={() => handleDelete(task.id)}>
                Delete
              </span>
            </li>
          );
        })}
      </ul>
      <Routes>
        <Route path="/deletetask" element={<h1>Delete Task</h1>} />
      </Routes>
    </Router>
  );
}

export default taskList;
