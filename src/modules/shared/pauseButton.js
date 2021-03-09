import React from "react";

const PauseButton = ({pause, color}) => {
    return (
        <div className="pause-button" onClick={pause}>
            <div className="pause-icon"></div>
        </div>
    )
}

export default PauseButton;
