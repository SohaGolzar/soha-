import React, { useState, useEffect } from "react";
import "./Modal.css";

export function Modal({ task, onClose, onSave }) {
  const [formData, setFormData] = useState({ title: "", description: "", status: "Pending" });

  useEffect(() => {
    if (task) setFormData(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.title && formData.description) {
      onSave(formData);
      setFormData({ title: "", description: "", status: "Pending" });
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{task ? "Edit Task" : "Add Task"}</h2>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

