import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdateTask() {
    const location = useLocation();
    const index = location.state.index;

    const item = JSON.parse(localStorage.getItem('tasks'))[index];
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [priority, setPriority] = useState(item.priority);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[index] = { ...tasks[index], title, description, priority };
        localStorage.setItem('tasks', JSON.stringify(tasks));
        navigate("/DisplayTask");
    }

    return (
        <div className="container mt-2 mb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h1 style={{ fontWeight: "1000", fontSize: "3rem" }} className="mt-5">Update a Task</h1>
                    <p style={{ fontSize: "larger" }}>Modify your existing tasks and keep your to-do list up to date. <br /></p>
                    <p style={{ fontSize: "larger" }}>Edit the below fields.</p>
                    <form action="" onSubmit={handleSubmit} className="mt-5">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e) => setDescription(e.target.value)} value={description} rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority">Priority:</label>
                            <select value={priority} onChange={(e) => setPriority(e.target.value)} id="priority" name="priority">
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                        <button type='submit' className="button btn btn-outline-secondary mt-2">Update Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
