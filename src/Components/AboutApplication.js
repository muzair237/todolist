import React from 'react'
import '../App.css';
import checklist from '../Assets/Images/checklist.png';
import { Link } from 'react-router-dom';

export default function AboutApplication() {
    return (
        <>
            <div className="container-fluid introContainer">
                <div className="row introductionHeading pb-2">
                    <div className="col text-center mt-3 introductionHeading">
                        <h2>Introducing the TODO Application</h2>
                    </div>
                </div>
                <div className="row mx-5 introductionText pb-3">
                    <hr />
                    <div className="col-md-12 text-center">
                        <img src={checklist} className="img-fluid-checkList" />
                    </div>
                    <div className=" mt-4 col-md-12 text-center introductionText">
                        <p>Welcome to my TODO application, where you can easily keep track of all your tasks and stay organized! With this app, you can create new tasks, set due dates, and mark them as complete once they're finished. You can also categorize your tasks and filter them based on priority or completion status. This app is perfect for anyone who wants to stay on top of their to-do list and increase their productivity. </p>
                        <Link to="/AddTask">
                            <button type="button" class="btn btn-outline-secondary text-light">Get Started</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
