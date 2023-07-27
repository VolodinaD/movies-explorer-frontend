import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header.js';
import Popup from '../Popup/Popup.js';

function Profile(props) {
    const [name, setName] = React.useState('');
    const [nameInput, setNameInput] = React.useState('');
    const [emailInput, setEmailInput] = React.useState('');

    React.useEffect(() => {
        setName('Дарья');
        setNameInput('Дарья');
        setEmailInput('bornofdasha@yandex.ru');
    }, []); 

    function handleNameInputChange(e) {
        setNameInput(e.target.value);
    }

    function handleEmailInputChange(e) {
        setEmailInput(e.target.value);
    }

    return (
        <>
            <Header onMain={props.onMain}>
                <>
                    <Link to="/movies" className="profile-navigation__movies">Фильмы</Link>
                    <Link to="/saved-movies" className="profile-navigation__saved-movies">Сохранённые фильмы</Link>
                    <div className="profile-navigation__profile">
                        <div className="profile-navigation__profile_image"></div>
                        <p className="profile-navigation__profile_text">Аккаунт</p>
                    </div>
                    <button type="button" className="profile-navigation__button" onClick={props.onPopupOpen}></button>
                </>
            </Header>
            <form className="profile">
                <h2 className="profile__title">{`Привет, ${name}!`}</h2>
                <div className="profile__line">
                    <p className="profile__line_text">Имя</p>
                    <input type="text" className="profile__line_input" value={nameInput || ''} onChange={handleNameInputChange} required />
                </div>
                <div className="profile__line">
                    <p className="profile__line_text">E-mail</p>
                    <input type="email" className="profile__line_input" value={emailInput || ''} onChange={handleEmailInputChange} required />
                </div>
                <button type="button" className="profile__edit">Редактировать</button>
                <button type="button" className="profile__exit">Выйти из аккаунта</button>
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