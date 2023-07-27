import React from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';

function Main(props) {
    return (
        <>
            <Header onMain={props.onMain}>
                <>
                    <button type="button" className="navigation__register" onClick={props.onRegister}>Регистрация</button>
                    <button type="button" className="navigation__login" onClick={props.onLogin}>Войти</button>
                </>
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    );
}

export default Main;