import React from "react";

function taskListForm({ handleAddTask, newTask, setNewTask, tasks }) {
  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          placeholder="Add New Task"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default taskListForm;
