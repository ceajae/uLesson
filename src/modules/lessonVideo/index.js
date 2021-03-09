import React, { useRef, useEffect, useState } from 'react';
import { Player, ControlBar, Shortcut } from 'video-react';

import backArrow from "../../images/back_arrow.svg";
import VideoControls from "./videoControls";
import ProgressBar from "./progressBar";


const LessonVideo = ({lessonInfo, onClose}) => {
    const playerRef = useRef();
    const [player, setPlayer] = useState({});
    const { chapterName, lesson } = lessonInfo;
    const videoUrl = (lesson && lesson.media_url) || "";

    const handleStateChange = (state) => {
        setPlayer(state)
    }

    useEffect(() => {
        playerRef.current.subscribeToStateChange(handleStateChange)
    }, [])

    const playVideo = () => {
        if (playerRef.current) {
              playerRef.current.play();
        }
    }

    const pauseVideo = () => {
        if (playerRef.current) {
              playerRef.current.pause();
        }
    }

    const getCurrentTime = () => {
        return player.currentTime;
    }

    const getDuration = () => {
        return player.duration;
    }

    const changeCurrentTime = (seconds) => {
        playerRef.current.forward(seconds);
    }

    return (
        <div className="lesson-video-wrap">
            <div className="back-icon" onClick={onClose}>
                <img src={backArrow} alt="backArrow" />
            </div>

            <div className="lesson-video">
                <div className="player">
                    <Player ref={playerRef} fluid={false} width={'100%'} height={'50%'} autoPlay>
                        <source src={videoUrl} />
                        <ControlBar autoHide={false}  />
                        <Shortcut clickable={false} />
                        <VideoControls
                            play={playVideo}
                            pause={pauseVideo}
                            player={player}
                            changeTime={changeCurrentTime}
                        />
                        <ProgressBar
                            currentTime={getCurrentTime()}
                            duration={getDuration()}
                          />
                    </Player>
                </div>
                <div className="lesson-details">
                    <p className="lesson-title muli_reg_24">{lesson.name}</p>
                    <p className="chapter muli_reg_18">{chapterName}</p>
                    <button className="muli_reg_18">Next</button>
                </div>
            </div>
        </div>
    )
}

export default LessonVideo;
