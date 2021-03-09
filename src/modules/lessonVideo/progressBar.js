import React from "react";
import { getTimeInMinutesSeconds, getPercentage } from "../../utils/helper";

const Filler = (props) => {
    return (<div className="progress-bar-filler" style={{ width: `${props.percentage}%` }}></div>);
}

const ProgressBar = ({currentTime, duration}) => {

  return (
      <div className="progress-bar-wrap muli_reg_18">
          <div className="currentTime">{getTimeInMinutesSeconds(currentTime)}</div>
          <div className="progress-bar">
              <Filler percentage={getPercentage(currentTime, duration)} />
          </div>
          <div className="duration">{getTimeInMinutesSeconds(duration)}</div>
      </div>
    )
}

export default ProgressBar;
