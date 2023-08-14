import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Header from '../Header/Header.js';

function Register(props) {
    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({
        name: '',
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
            case "name" : {
                errs.name = error;

                break;
            }
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
        
        props.handleRegister(formValue);
        setFormValue({name: '', email: '', password: ''});
        setFormValid(false);
    }

    return (
        <>
            <Header onMain={props.onMain} loggedIn={props.loggedIn} onPopupOpen={props.onPopupOpen} onRegister={props.onRegister} onLogin={props.onLogin} />
            <form className="register" onSubmit={handleSubmit}>
                <h2 className="register__title">Добро пожаловать!</h2>
                <div className="register__container">
                    <p className="register__container_text">Имя</p>
                    <input type="text" name="name" id="name-input" className="register__container_input" value={formValue.name} onChange={handleChange} minLength="2" maxLength="30" required />
                    <span className="register__error">{errors.name}</span>
                </div>
                <div className="register__container">
                    <p className="register__container_text">E-mail</p>
                    <input type="text" name="email" id="email-input" className="register__container_input" value={formValue.email} onChange={handleChange} required />
                    <span className="register__error">{errors.email}</span>
                </div>
                <div className="register__container">
                    <p className="register__container_text">Пароль</p>
                    <input type="password" name="password" id="password-input" className="register__container_input" value={formValue.password} onChange={handleChange} required />
                    <span className="register__error">{errors.password}</span>
                </div>
                <button type="submit" className={`register__button ${formValid ? '' : 'register__button_disabled'}`} disabled={!formValid}>Зарегистрироваться</button>
                <div className="register__line">
                    <p className="register__line_text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__line_link">Войти</Link>
                </div>
            </form>
        </>
    );
}

export default Register;