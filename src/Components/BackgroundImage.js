import React from 'react'
import '../App.css';
import bgImage from '../Assets/Images/BgImage.jpg';

export default function BackgroundImage() {
    return (
        <>
            <div className="container-fluid bgImageContainer">
                <img src={bgImage} className="img-fluid carousel-image" />
                <div className="headingText">
                    <h1>WELCOME TO MY TODO APPLICATION!</h1>
                </div>
                <div className="supportingText">
                    <h4>Here you can manage your daily tasks and stay organized!</h4>
                </div>
            </div>
        </>
    )
}
