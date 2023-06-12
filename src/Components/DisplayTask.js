import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function DisplayTask() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      const newTasks = storedTasks.map((task, index) => ({ ...task, index: index + 1 }));
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  }, []);
  const handleDelete = (index) => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    storedTasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    setTasks(storedTasks);
  }
  const handleUpdate = (index) => {
    navigate('/UpdateTask', { state: { index } });
  }

  return (
    <>
      <div className="container mt-5 mb-4">
        <h1 style={{ fontWeight: "1000", fontSize: "3rem" }} className="mt-5">Tasks</h1>
        {tasks.length === 0 ? (
          <>
            <p style={{ fontSize: "larger" }}>No Tasks Available! Add a Task to Stay Organized.</p>
            <Link to="/AddTask">
              <button className="btn btn-sm btn-outline-secondary ">Add task</button>
              <hr style={{ borderWidth: "0.2rem", color: "#192138" }} />

            </Link>
          </>

        ) : (
          <>
            <p style={{ fontSize: "larger" }}>Your saved tasks are listed below: </p >
            <div className="row row-cols-md-2 row-cols-lg-3">
              {tasks.map((task, index) => (
                <div key={index} className="mb-3 cards">
                  <div className="card border-success" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <p className="card-text"><strong>Task #: </strong>{index + 1}</p>
                      <h6 className="card-title">{task.title}</h6>
                      <p className="card-text">{task.description}</p>
                      <p className="card-text"><strong>Priority:</strong> {task.priority}</p>
                      <p className="card-subtitle mb-2"><strong>Date Added:</strong> {task.dateAdded}</p>
                      <button onClick={() => handleDelete(index)} className="btn btn-sm btn-outline-danger mt-1">Delete Task</button>
                      <button onClick={() => handleUpdate(index)} className="btn btn-sm btn-outline-secondary mt-1 mx-2">Update Task</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

    </>
  );
}
