import React, { useState } from "react";
import { TaskList } from "./TaskList";
import { Modal } from "./modal";

import "./TaskManager.css";


export function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Eggs", status: "Pending" },
    { id: 2, title: "Clean the house", description: "Living room and kitchen", status: "Completed" },
  ]);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleSave = (task) => {
    if (currentTask) {
      setTasks(tasks.map((t) => (t.id === currentTask.id ? { ...currentTask, ...task } : t)));
    } else {
      setTasks([...tasks, { id: tasks.length + 1, ...task }]);
    }
    setShowModal(false);
    setCurrentTask(null);
  };

  const handleDelete = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const handleEdit = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="filter-container">
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button onClick={() => setShowModal(true)}>Add Task</button>
      <TaskList tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} />
      {showModal && (
        <Modal
          task={currentTask}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}