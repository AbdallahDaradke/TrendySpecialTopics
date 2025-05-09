import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskListForm from "./Components/taskListForm";
import TaskList from "./Components/taskList";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTask, completed: false },
    ]);
    setNewTask("");
  };

  return (
    <div>
      <h1>My Task List</h1>
      <TaskListForm
        handleAddTask={handleAddTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
