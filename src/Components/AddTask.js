import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';

export default function AddTask() {
  const navigate = useNavigate();
  const currentDate = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" && description === "") {
      alert("Enter either Title or Description to proceed");
    } else {
      const newTask = {
        title: title,
        description: description,
        priority: priority,
        dateAdded: formattedDate
      };
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const updatedTasks = [...storedTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      navigate("/DisplayTask");
    }
  }

return (
  <>
    <div className="container mt-2 mb-3">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 style={{ fontWeight: "1000", fontSize: "3rem" }} className="mt-5">Add a Task</h1>
          <p style={{ fontSize: "larger" }}>Stay organized and keep track of your to-do list by adding a new task. <br />
          </p>
          <form action="" onSubmit={handleSubmit} className="mt-5">
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title " />
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description " rows="3"></textarea>
            </div>
            <div className="mb-3">
              <input className="form-control" disabled value={`Dated: ${formattedDate || ''}`} id="exampleFormControlInput1" onChange={() => { }} />
            </div>
            <div className="mb-3">
              <label htmlFor="priority">Priority:</label>
              <select value={priority} onChange={(e) => setPriority(e.target.value)} id="priority" name="priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <button type='submit' className="button btn btn-outline-secondary mt-2">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  </>
);
}
