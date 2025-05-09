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

  return (
    <Router>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} onClick={() => toggleTask(task.id)}>
              {task.text} {task.completed ? "✔️" : "❌"}{" "}
              <Link to="/deletetask">Delete</Link>
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
