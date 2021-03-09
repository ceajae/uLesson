import React from "react";
import avatar from "../../images/avatar.svg";
import uLessonLogo from "../../images/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={uLessonLogo} alt="uLessonLogo" />
            </div>

            <div className="user muli_reg_16">
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <p>Hassan</p>
            </div>
        </header>
    );
}

export default Header;
