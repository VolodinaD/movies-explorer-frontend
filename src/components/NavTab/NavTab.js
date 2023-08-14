import React from 'react';
import './NavTab.css';

function NavTab(props) {
    return (
        <nav className="navtab">
            <a href="#project" className="navtab__link">О проекте</a>
            <a href="#techs" className="navtab__link">Технологии</a>
            <a href="#student" className="navtab__link">Студент</a>
        </nav>
    );
}

export default NavTab; 