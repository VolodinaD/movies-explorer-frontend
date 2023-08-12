import React from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
import Header from '../Header/Header.js';
import Popup from '../Popup/Popup.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function Movies(props) {
    return (
        <>
            <Header onMain={props.onMain} loggedIn={props.loggedIn} onPopupOpen={props.onPopupOpen} onRegister={props.onRegister} onLogin={props.onLogin} />
            <SearchForm findFilms={props.findFilms} handleCheckedClick={props.handleCheckedClick} isChecked={props.isChecked} keyword={props.keyword} />
            <MoviesCardList cards={props.cards} likeCard={props.likeCard} deleteCard={props.deleteCard} isCardsMessage={props.isCardsMessage} />
            <Footer />
            <Popup isOpen={props.isPopupOpen} onClose={props.onPopupClose}>
                <>
                    <Link to="/" className="movies-navigation__main_popup" onClick={props.onPopupClose}>Главная</Link>
                    <p className="movies-navigation__movies_popup">Фильмы</p>
                    <Link to="/saved-movies" className="movies-navigation__saved-movies_popup" onClick={props.onPopupClose}>Сохранённые фильмы</Link>
                    <Link to="/profile" className="movies-navigation__profile_popup" onClick={props.onPopupClose}>
                        <div className="movies-navigation__profile_image"></div>
                        <p className="movies-navigation__profile_text">Аккаунт</p>
                    </Link>
                </>
            </Popup>
        </>
    );
}

export default Movies;