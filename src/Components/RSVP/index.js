import React, { useState } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Lookup from './Lookup';


export default function RSVPIndex() {
    const [guestInfo, setGuestInfo] = useState();
    return (
        <Switch>
            <Route path="/respond">
                <p>placeholder for respond</p>
            </Route>
            <Route path="">
                <Lookup setGuestInfo={setGuestInfo} />
            </Route>
        </Switch>
    );
}