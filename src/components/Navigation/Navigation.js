import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
    let location = useLocation();

    if ((location.pathname === "/signin") || (location.pathname === "/signup")) {
        return;
    } else if (props.loggedIn) {
        return (
            <nav className="navigation">
                <Link to="/movies" className="navigation__movies">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__saved-movies">Сохранённые фильмы</Link>
                <Link to="/profile" className="navigation__profile">
                    <div className="navigation__profile_image"></div>
                    <p className="navigation__profile_text">Аккаунт</p>
                </Link>
                <button type="button" className="navigation__button" onClick={props.onPopupOpen}></button>
            </nav>
        );
    } else {
        return (
            <nav className="navigation">
                <button type="button" className="navigation__register" onClick={props.onRegister}>Регистрация</button>
                <button type="button" className="navigation__login" onClick={props.onLogin}>Войти</button>
            </nav>
        );
    }
}

export default Navigation;