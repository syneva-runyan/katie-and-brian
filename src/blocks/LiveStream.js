import React from 'react';

import './LiveStream.css';

const LiveStream = function() {
    return ( <
        div className = "contentContainer live_stream" >
        <
        h1 > Live Stream < /h1> <
        div className = "live_stream_image" >
        <
        img src = '../images/steps.jpg'
        alt = "Katie and Brian" / >
        <
        /div> <
        div className = "live_stream_content" >
        <
        div className = "live_stream_main_block" >
        <p><
        strong >
        <
        span className = "main-text" > The wedding will be livestreamed on <
        a target = "_blank"
        rel = "noopener noreferrer"
        href = "https://www.youtube.com/channel/UC1ee7lmibIVuUQhMuqyCgrQ" >
        Holy Trinity's youtube channel.</a></span></strong></p></div> <
        p >
        If watching virtually, you are encouraged to hashtag a picture of yourself watching with < strong > #betterWickYou < /strong> <
        br / > < br / >
        Information about various zoom watch parties will be posted on this page closer to the wedding. < /p>< /
        div > < /
        div >
    );
};

export default LiveStream;