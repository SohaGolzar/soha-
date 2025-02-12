import React from "react";
import "./TaskList.css";

export function TaskList({ tasks, filter, onEditTask, onDeleteTask }) {
  const filteredTasks = tasks.filter(
    (task) => filter === "All" || task.status === filter
  );

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <div key={task.id} className="task">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>
            Status: <strong>{task.status}</strong>
          </p>
          <button onClick={() => onEditTask(task)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}


