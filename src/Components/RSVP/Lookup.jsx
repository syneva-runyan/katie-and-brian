import React from "react";

import './styles.css';

export default function Lookup() {
    return (
        <div className="rsvp-lookup">
            <h1>RSVP</h1>
            <h3> Search for your invite below.</h3>
            <form className="rsvp-lookup__form">
                <div className="floating-label">                        
                    <input id="first-name" placeholder="First Name" />
                    <label htmlFor="first-name">First name</label>
                </div>
                <div className="floating-label">
                    <input id="last-name" placeholder="Last Name"/>
                    <label htmlFor="last-name">Last name</label>
                </div>
                <button className="rsvp-lookup__btn" type="submit">Lookup RSVP</button>
            </form>
        </div>
    )
}