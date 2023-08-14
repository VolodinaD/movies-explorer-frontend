import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../Header/Header.js';

function Login(props) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({
        email: '',
        password: ''
    });

    const [formValid, setFormValid] = React.useState(false);

    const isEmailValid = (email) => {
        const emailRegexp = new RegExp(
          /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
        );

        return emailRegexp.test(email);
    }

    function handleChange(e) {
        const {name, value} = e.target;
        const error = e.target.validationMessage;
        let errs = errors;

        setFormValue({
            ...formValue,
            [name]: value
        });
        
        switch(name) {
            case "email": {
                if (value === '') {
                    errs.email = error;
                } else {
                    errs.email = isEmailValid(value) ? '' : 'Введите email в таком виде: email@mail.ru';
                }

                break;
            }
            case "password" : {
                errs.password = error;

                break;
            }
            default: {
                break;
            }
        }

        setErrors(errs);

        if(errors.email === '') {
            setFormValid(e.target.closest('form').checkValidity());
        } else {
            setFormValid(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formValue.email || !formValue.password) {
            return;
        } else {        
            props.handleLogin(formValue);
            setFormValue({email: '', password: ''});
            setFormValid(false);
        }    
    }

    return (
        <>
            <Header onMain={props.onMain} loggedIn={props.loggedIn} onPopupOpen={props.onPopupOpen} onRegister={props.onRegister} onLogin={props.onLogin} />
            <form className="login" onSubmit={handleSubmit}>
                <h2 className="login__title">Рады видеть!</h2>
                <div className="login__container">
                    <p className="login__container_text">E-mail</p>
                    <input type="text" name="email" id="email-input" className="login__container_input" value={formValue.email} onChange={handleChange} required />
                    <span className="login__error">{errors.email}</span>
                </div>
                <div className="login__container">
                    <p className="login__container_text">Пароль</p>
                    <input type="password" name="password" id="password-input" className="login__container_input" value={formValue.password} onChange={handleChange} required />
                    <span className="login__error">{errors.password}</span>
                </div>
                <button type="submit" className={`login__button ${formValid ? '' : 'login__button_disabled'}`} disabled={!formValid}>Войти</button>
                <div className="login__line">
                    <p className="login__line_text">Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="login__line_link">Регистрация</Link>
                </div>
            </form>
        </>
    );
}

export default Login;