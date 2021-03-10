import React from "react";
import { Link } from "react-router-dom";

import { getSubjectData } from "../../utils/helper";

const SubjectCard = ({ data }) => {
    const { id, name } = data;
    const { icon, color } = getSubjectData(name);

    return(
        <Link to = {`/${id}`}>
            <span>
                <div style={{backgroundColor: color}} className={`subject-card muli_reg_15 ${name.toLowerCase()}_card`}>
                    <div className="subject-icon">
                        <img src={icon} alt="icon" />
                    </div>
                    <div className="subject-name">{name}</div>
                </div>
            </span>
        </Link>
    );
}

export default SubjectCard;
