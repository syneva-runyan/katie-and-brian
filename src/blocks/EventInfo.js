import React, { Component }  from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventInfo.css";

class EventInfo extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="eventInfo">
                <div className="eventInfoDetails">
                    <ul>
                        <li>
                            <p>
                                <strong>Date</strong> 
                                <br/>
                                <span className="eventInfoDetailsText">September 5, 2020.</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Ceremony</strong>
                                <br/> 
                                <span className="eventInfoDetailsText">
                                    <a href="http://www.holytrinityparish.net/"  target="_blank" rel="noreferrer noopener">Holy Trinity Catholic Church</a>
                                    <br/>
                                    Xpm
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Reception</strong>
                                <br/>
                                <span className="eventInfoDetailsText">
                                    <a href="https://www.daisyhillvenue.com/"  target="_blank" rel="noreferrer noopener">Daisy Hill</a>
                                    <br/>
                                    Xpm
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Transportation</strong>
                                <br/>
                                <span className="eventInfoDetailsText">
                                    Busses will be provided??
                                </span>    
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Attire</strong>
                                <br/>
                                <span className="eventInfoDetailsText">
                                    Formal? Cocktail?
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default EventInfo;