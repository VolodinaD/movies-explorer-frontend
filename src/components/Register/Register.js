import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Header from '../Header/Header.js';

function Register(props) {
    return (
        <>
            <Header onMain={props.onMain}>
                <>
                </>
            </Header>
            <form className="register">
                <h2 className="register__title">Добро пожаловать!</h2>
                <div className="register__container">
                    <p className="register__container_text">Имя</p>
                    <input type="text" className="register__container_input" minLength="2" maxLength="40" required />
                </div>
                <div className="register__container">
                    <p className="register__container_text">E-mail</p>
                    <input type="email" className="register__container_input" required />
                </div>
                <div className="register__container">
                    <p className="register__container_text">Пароль</p>
                    <input type="password" className="register__container_input" required />
                </div>
                <button type="button" className="register__button">Зарегистрироваться</button>
                <div className="register__line">
                    <p className="register__line_text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__line_link">Войти</Link>
                </div>
            </form>
        </>
    );
}

export default Register;