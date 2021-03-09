import React from "react";
import ForwardButton from "../../images/forward.svg";
import RewindButon from "../../images/rewind.svg";
import PauseButton from "../shared/pauseButton";
import PlayButton from "../shared/playButton";
import Loader from "../shared/loader";


const VideoControls = (props) => {
    const { play, pause, player, changeTime } = props;

    const forward = () => {
        changeTime(10);
    }

    const rewind = () => {
        changeTime(-10);
    }

    const displayControlComp = () => {
        if (!player.hasStarted) {
            return <Loader />
        }
        if (player.paused) {
            return <PlayButton play={play} />
        }

        return <PauseButton pause={pause} />
    }

    return (
        <div className="video-controls-wrap">
            <div className="rewind" onClick={() => rewind()}>
                <img src={RewindButon} alt="rewind" />
            </div>
            <div className="play-pause">
                {displayControlComp()}
            </div>
            <div className="forward" onClick={() => forward()}>
                <img src={ForwardButton} alt="forward" />
            </div>
        </div>
    );
}

export default VideoControls;
