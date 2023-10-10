import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (editIndex !== null) {
      // Edit existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setTask("");
      setEditIndex(null);
    } else {
      // Add new task
      if (task.trim() !== "") {
        setTasks([...tasks, task]);
        setTask("");
      }
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-added">
      
      <div className="task-form">
      <select className='drop-down'>
     

     <option value="daily">Daily</option>
     
     <option value="weekly">Weekly</option>
     
     <option value="monthly">Monthly</option>
     <option value="year">Year</option>
     
     </select>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input-text"/>
        <button onClick={addTask} className="add-task">
          {editIndex !== null ? "Edit Task" : "Add Task"}
        </button>
      </div>
      <button className="menu-all">All</button>
      <button className="menu-task">Daily</button>
      <button className="menu-task">Weekly</button>
      <button className="menu-task">Monthly</button>
      <button className="menu-task">Year</button>
      <ol className="list-text">
        {tasks.map((task, index) => (
          <li key={index} className="list-text">
            {task}
            <button onClick={() => editTask(index)} className="edit">Edit</button>
            <button onClick={() => deleteTask(index)} className="delete">Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
