import React from "react";

const LessonCard = (props) => {
  const { chapterName, lesson, onClick } = props;
  const { name, icon } = lesson;

    return(
        <div className="lesson-card" onClick={() => onClick(chapterName, lesson)}>
            <div className="lesson-icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="lesson-title mulish_bold_20">{name}</div>
        </div>
    );
}

export default LessonCard;
