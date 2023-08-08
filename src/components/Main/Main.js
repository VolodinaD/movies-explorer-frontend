import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';
import Popup from '../Popup/Popup.js';

function Main(props) {
    return (
        <>
            <Header onMain={props.onMain} loggedIn={props.loggedIn} onPopupOpen={props.onPopupOpen} onRegister={props.onRegister} onLogin={props.onLogin} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
            <Popup isOpen={props.isPopupOpen} onClose={props.onPopupClose}>
                <>
                    <p className="main-navigation__main_popup">Главная</p>
                    <Link to="/movies" className="main-navigation__movies_popup" onClick={props.onPopupClose}>Фильмы</Link>
                    <Link to="/saved-movies" className="main-navigation__saved-movies_popup" onClick={props.onPopupClose}>Сохранённые фильмы</Link>
                    <Link to="/profile" className="main-navigation__profile_popup" onClick={props.onPopupClose}>
                        <div className="main-navigation__profile_image"></div>
                        <p className="main-navigation__profile_text">Аккаунт</p>
                    </Link>
                </>
            </Popup>
        </>
    );
}

export default Main;