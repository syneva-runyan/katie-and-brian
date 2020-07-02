import React, { useState } from "react";
import { lookup } from './api'

import './styles.css';

export default function Lookup() {
    const [addressee, setAddressee] = useState("");
    const lookupRSVP = (e) => {
        e.preventDefault();
        lookup(addressee);
    }

    const onAddresseeChange = (e) => {
        setAddressee(e.target.value)
    }


    return (
        <div className="rsvp-lookup">
            <h1>RSVP</h1>
            <h4> Search for your invitation below.</h4>
            <form className="rsvp-lookup__form">
                <div className="rsvp-lookup__inputs">
                    <div className="floating-label">                        
                        <input id="first-name" placeholder="Invitation Addressee" value={addressee} onChange={onAddresseeChange} />
                        <label htmlFor="first-name">Invitation Addressee</label>
                        <span className="rsvp-lookup__helper">Use the name on your invitation's envelope, ex "Tom & Jerry"</span>
                    </div>
                </div>
                <button className="rsvp-lookup__btn" type="submit" onClick={lookupRSVP}>Lookup Invitation</button>
            </form>
        </div>
    )
}