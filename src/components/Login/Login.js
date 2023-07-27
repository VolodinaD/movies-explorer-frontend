import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../Header/Header.js';

function Login(props) {
    return (
        <>
            <Header onMain={props.onMain}>
                <>
                </>
            </Header>
            <form className="login">
                <h2 className="login__title">Рады видеть!</h2>
                <div className="login__container">
                    <p className="login__container_text">E-mail</p>
                    <input type="email" id="email-input" className="login__container_input" required />
                    <span class="login__container_input-error" id="email-input-error"></span>
                </div>
                <div className="login__container">
                    <p className="login__container_text">Пароль</p>
                    <input type="password" className="login__container_input" required />
                </div>
                <button type="button" className="login__button">Войти</button>
                <div className="login__line">
                    <p className="login__line_text">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="login__line_link">Регистрация</Link>
                </div>
            </form>
        </>
    );
}

export default Login;