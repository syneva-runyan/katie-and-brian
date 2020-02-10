import React from "react";
import { Parallax, Background } from 'react-parallax';
import "./OurStory.css";

export default function OurStory() {
    return (
        <div className="ourStory">
            <h2 className="ourStory__title ourStory__content">Our story began in Washington, DC</h2>

            <Parallax
                bgImage={require('../images/dc2.png')}
                bgImageAlt="DC fairy tale"
                strength={200}
            >
                <img
                    alt="DC Fairytale"
                    className="ourStory__hero"
                    src="./images/story.png"
                />
            </Parallax>
            <p className="ourStory__content">
                in September 2015. Brian had just moved to the area from New Jersey, while Katie was well established in the city.
            Being two single twenty-somethings in DC, they first encountered each other on a dating app called<br /> 
            <strong>CoffeeMeetsBagel.</strong>
            </p>
            <Parallax
                bgImage={require('../images/coffeeMeetBagel.jpg')}
                bgImageAlt="DC fairy tale"
                strength={200}
            >
                <img
                    alt="DC Fairytale"
                    className="ourStory__hero"
                    src="./images/story.png"
                />
            </Parallax>
            <p className="ourStory__content">After exchanging some flirtatious banter online, the two decided to meet in person for drinks. They almost missed their chance to connect on their first date when Katie and Brian stood next to each other at the bar for several minutes without realizing the person next to them was their date, but they eventually figured it out. </p>
            <Parallax
                bgImage={require('../images/banter.jpg')}
                bgImageAlt="DC fairy tale"
                strength={200}
            >
                <img
                    alt="DC Fairytale"
                    className="ourStory__hero"
                    src="./images/story.png"
                />
            </Parallax>
            <p className="ourStory__content">The two connected over their mutual love of travel, regaling each other with stories of backpacking in foreign lands (Katie through Turkey and Brian in Southeast Asia). While both tried to play it cool at first, in the following months their bond deepened and<br/> <strong>they fell in love.</strong></p>
            <Parallax
            className="ourStory__hero--final"
                bgImage={require('../images/kiss2.jpg.png')}
                bgImageAlt="DC fairy tale"
                strength={200}
            >
                <img
                    alt="DC Fairytale"
                    className="ourStory__hero"
                    src="./images/story.png"
                />
            </Parallax>
        </div>
    );
}