import React from 'react';
import Countdown from 'react-countdown';

import './LiveStream.css';

const LiveStream = function () {
    return (
    <div className="contentContainer live_stream">
        <h1> Live Stream </h1>
        <div className="live_stream_image" >
            <img
                src='../images/steps.jpg'
                alt="Katie and Brian"
            />
        </div>
        <div className="live_stream_content" >
            <p className="live_stream_main_block">
                <strong className="main-text">
                The wedding will be livestreamed on{" "}
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UC1ee7lmibIVuUQhMuqyCgrQ" >
                    Holy Trinity's youtube channel.</a> 
                    {/* in
                    <Countdown
                        date={new Date('2020-09-05T17:00+00:00')} //UTC
                        intervalDelay={0}
                        renderer={props => {
                            const daysText = props.days > 0 && `${props.days} day` || '';
                        return (
                            <div>
                                {props.total > 0 ?
                                `${daysText} ${props.hours} hours ${props.minutes} minutes ${props.seconds} seconds` :
                                'Now!!'}
                            </div>);
                        }}
                    /> */}
                </strong>
            </p>
             <p>
                If attending virtually, you are encouraged to hashtag a picture of yourself watching with 
                <strong> #betterWickYou </strong> or email the picture to syneva@gmail.com.
            </p>
        </div>
    </div>);
};
            
export default LiveStream;