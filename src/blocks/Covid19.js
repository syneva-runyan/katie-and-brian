import React from 'react';
import './Covid19.css';

export default function Covid19() {
    return (
        <div className="contentContainer">
            <h1 className="h2 covid19__header">
                Note about COVID-19:
            </h1>
            <p>
                The coronavirus situation is a concerning and dynamic situation we have been closely watching as we plan for our big day. As of mid-June, the reception venue is open for business, so<strong> we are proceeding with our wedding as originally planned.</strong>
                {" "}The situation may change if Georgia or Fayette County issue new shelter-in-place restrictions in response to the pandemic; we will keep an eye on this and let you know if anything changes between mid-June and September 5.
                 <br/><br/>
                 We understand that each guest will need to consider the risk of traveling during these times and understand if you cannot attend due to concerns about the virus.
                <br/>
            </p>
            <p>Hope to celebrate with you on September 5th,<br/>
                <span className="covid19__signature">Katie & Brian</span>
            </p>

        </div>
    );
}