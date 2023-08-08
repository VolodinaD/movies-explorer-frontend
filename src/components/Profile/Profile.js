import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import './Profile.css';
import Header from '../Header/Header.js';
import Popup from '../Popup/Popup.js';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [formValue, setFormValue] = React.useState({
        name: currentUser.name,
        email: currentUser.email,
    });

    const [errors, setErrors] = React.useState({
        name: '',
        email: '',
    });

    const [formValid, setFormValid] = React.useState(false);

    function handleChange(e) {
        const {name, value} = e.target;
        const error = e.target.validationMessage;
        
        setFormValue({
            ...formValue,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: error
        });

        setFormValid(e.target.closest('form').checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        props.handleEditProfile(formValue);
        setFormValid(false);
    }

    return (
        <>
            <Header onMain={props.onMain} loggedIn={props.loggedIn} onPopupOpen={props.onPopupOpen} onRegister={props.onRegister} onLogin={props.onLogin} />
            <form className="profile" onSubmit={handleSubmit}>
                <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
                <div className="profile__line">
                    <p className="profile__line_text">Имя</p>
                    <input type="text" name="name" className="profile__line_input" value={formValue.name || ''} onChange={handleChange} minLength="2" maxLength="30" required />
                </div>
                <span className="profile__error">{errors.name}</span>
                <div className="profile__line">
                    <p className="profile__line_text">E-mail</p>
                    <input type="email" name="email" className="profile__line_input" value={formValue.email || ''} onChange={handleChange} required />
                </div>
                <span className="profile__error">{errors.email}</span>
                <p className="profile__message">{props.message}</p>
                <button type="submit" className={`profile__edit ${!formValid || ((formValue.name === currentUser.name) && (formValue.email === currentUser.email)) ? 'profile__edit_disabled' : ''}`} disabled={!formValid || ((formValue.name === currentUser.name) && (formValue.email === currentUser.email))}>Редактировать</button>
                <button type="button" className="profile__exit" onClick={props.signOut}>Выйти из аккаунта</button>
            </form>
            <Popup isOpen={props.isPopupOpen} onClose={props.onPopupClose}>
                <>
                    <Link to="/" className="profile-navigation__main_popup" onClick={props.onPopupClose}>Главная</Link>
                    <Link to="/movies" className="profile-navigation__movies_popup" onClick={props.onPopupClose}>Фильмы</Link>
                    <Link to="/saved-movies" className="profile-navigation__saved-movies_popup" onClick={props.onPopupClose}>Сохранённые фильмы</Link>
                    <div className="profile-navigation__profile_popup">
                        <div className="profile-navigation__profile_image"></div>
                        <p className="profile-navigation__profile_text">Аккаунт</p>
                    </div>
                </>
            </Popup>
        </>
    );
}

export default Profile;