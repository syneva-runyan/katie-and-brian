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
                                    1pm
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Cocktail Hour</strong>
                                <br/>
                                <span className="eventInfoDetailsText">
                                    <a href="https://www.daisyhillvenue.com/"  target="_blank" rel="noreferrer noopener">Daisy Hill</a>
                                    <br/>
                                    4pm
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
                                    5-8pm
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <strong>Transportation</strong>
                                <br/>
                                <span className="eventInfoDetailsText">
                                    Transportation will be provided to and from the{" "}
                                    <a href="https://www.guestreservations.com/peachtree-city-hotel-38-conference-center/booking?msclkid=8d57f8dad6be1ea23f10a69193dd9040" target="_blank" rel="noreferrer noopener">Peachtree City Hotel and Conference Center</a>{" "}
                                    and <a href="https://www.daisyhillvenue.com/"  target="_blank" rel="noreferrer noopener">Daisy Hill</a>
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