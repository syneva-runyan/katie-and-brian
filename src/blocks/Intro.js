import React, { Fragment } from "react";
import "./Intro.css";
import Carousel from '../Components/Carousel';


function Intro() {
    return (
        <div className="intro">
            <header className="App-header">
                <h1 className="introTitle">Katie and Brian</h1>
            </header>
            <Carousel
                images={['./images/dance2.png', './images/photo-gallery/4.jpg', './images/heartWallKiss.png']}
            />
            <h4 className="date">September 5, 2020 | <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=7tV2b6rpBYk">Peachtree City, Georgia</a></h4>
        </div>
    );
}

export default Intro;
