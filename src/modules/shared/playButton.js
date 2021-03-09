import React from "react";

const PlayButton = ({play, color}) => {
    return (
        <div className="play-button" onClick={play}>
            <div className="play-icon" style={{borderLeft: `16px solid ${color}`}}></div>
        </div>
    )
}

export default PlayButton;
