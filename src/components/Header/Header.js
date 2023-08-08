import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';

function Header(props) {
    let location = useLocation();

    return (
        <header className={`header ${(location.pathname === "/signin") || (location.pathname === "/signup") ? "header__auth" : ""}`}>
            <button type="button" className="header__logo" onClick={props.onMain}></button>
            <Navigation loggedIn={props.loggedIn} onPopupOpen={props.onPopupOpen} onRegister={props.onRegister} onLogin={props.onLogin} />
        </header>
    );
}

export default Header; 