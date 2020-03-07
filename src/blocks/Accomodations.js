import React from 'react';
import { NavLink  } from "react-router-dom";
import './Accomodations.css';

export default function Accomodations() {
    return (
        <div className="accomodationsInfo">
            <h1>
                Accomodations
            </h1>
            <p>There is a wedding block reserved at the <a href="https://secure3.hilton.com/en_US/hi/reservation/book.htm?inputModule=HOTEL&ctyhocn=ATLPGHH&spec_plan=RWB&arrival=20200904&departure=20200906&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank" rel="noreferrer noopener">Peachtree City Hotel and Conference Center</a></p>
            <p>In addition to the wedding block, there are numerous other hotels and a variety of Air Bnbs in the area.</p>
            <p>Looking for <NavLink className="accomodations__things-to-do" to="/things-to-do">things to do while in Peachtree City?</NavLink></p>
        </div>
    );
}