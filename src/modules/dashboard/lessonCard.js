import React from "react";
import { getSubjectData } from "../../utils/helper";
import PlayButton from "../shared/playButton";


const LessonCard = ({ data }) => {
    const subjectName = (data && data.name) || "";
    const chapters = (data && data.chapters) || [];
    const randomChapter = chapters[0] || {};
    const randomLesson = (randomChapter && randomChapter.lessons && randomChapter.lessons[0]) || {};
    const randomLessonIconUrl = randomLesson.icon;

    const { color } = getSubjectData(subjectName);
    const style = {
        background: `url(${randomLessonIconUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0,0,0,0.6)',
    };

    return(
        <div className="lesson-card">
            <div className="lesson-image" style={style}>
                  <PlayButton color={color} />
            </div>
            <p className="subject muli_reg_16" style={{color: color}}>{subjectName}</p>
            <p className="lesson-title muli_bold_22">{randomLesson.name || '-'}</p>
        </div>
    );
}

export default LessonCard;
