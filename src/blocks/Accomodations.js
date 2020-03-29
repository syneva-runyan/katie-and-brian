import React from 'react';
import { NavLink  } from "react-router-dom";
import './Accomodations.css';

export default function Accomodations() {
    return (
        <div className="contentContainer accomodations">
            <h1 className="accomodations__title">
                Accomodations
            </h1>
            <h2>Hotel Block</h2>
            <p>We have a block of rooms reserved at the <a href="https://secure3.hilton.com/en_US/hi/reservation/book.htm?inputModule=HOTEL&ctyhocn=ATLPGHH&spec_plan=RWB&arrival=20200904&departure=20200906&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank" rel="noreferrer noopener">Peachtree City Hotel and Conference Center</a><br/>
            Rates are $119 per night for either 1 King bed or 2 Queen beds. The hotel is a 5 min drive from the church and a 10 min drive from the reception venue.<br/><br/>
            Transportation will be provided to and from the hotel and the reception.
            </p><br/>
            <h2>Alternate Accommodations</h2>
            <p>In addition to the wedding block, there are numerous other hotels and a variety of <a href="https://www.airbnb.com/s/Walt-Banks-Road--Peachtree-City--GA--USA/homes?refinement_paths%5B%5D=%2Fhomes&source=mc_search_bar&search_type=autocomplete_click&screen_size=large&checkin=2020-09-04&checkout=2020-09-06&adults=1&query=Walt%20Banks%20Road%2C%20Peachtree%20City%2C%20GA%2C%20USA&place_id=EihXYWx0IEJhbmtzIFJvYWQsIFBlYWNodHJlZSBDaXR5LCBHQSwgVVNBIi4qLAoUChIJU58O6YLp9IgRarXTdTwtdLMSFAoSCZtWa96RwfSIEapGfz1grP2U" target="_blank" rel="noreferrer noopener">Airbnbs</a> in the area.</p>
            <p>Looking for <NavLink className="accomodations__things-to-do" to="/things-to-do">things to do while in Peachtree City?</NavLink></p>
        </div>
    );
}