import React from 'react';
import { NavLink  } from "react-router-dom";
import './Accomodations.css';

export default function Accomodations() {
    return (
        <div className="accomodationsInfo">
            <h1>
                Accomodations
            </h1>
            <p>Block information is coming soon for the <a href="https://www.guestreservations.com/peachtree-city-hotel-38-conference-center/booking?msclkid=8d57f8dad6be1ea23f10a69193dd9040" target="_blank" rel="noreferrer noopener">Peachtree City Hotel and Conference Center</a></p>
            <p>In addition to the wedding room block at the Peachtree City Hotel and Conference Center, there are numerous other hotels and a variety of Air Bnbs in the area.</p>
            <p>Looking for <NavLink className="accomodations__things-to-do" to="/things-to-do">things to do while in Peachtree City?</NavLink></p>
        </div>
    );
}