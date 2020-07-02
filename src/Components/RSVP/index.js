import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import useScript from '../../utils/useScript';
import Lookup from './Lookup';

import constants from './constants';

export default function RSVPIndex() {
    return (
        <Switch>
            <Route path="/respond">
                <p>placeholder for respond</p>
            </Route>
            <Route path="">
                <Lookup />
            </Route>
        </Switch>
    );
}