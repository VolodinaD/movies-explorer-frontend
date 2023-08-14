import React from 'react';
import { Link } from 'react-router-dom';
import './SavedMovies.css';
import Header from '../Header/Header.js';
import Popup from '../Popup/Popup.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function SavedMovies(props) {
    return (
        <>
            <Header onMain={props.onMain} loggedIn={props.loggedIn} onPopupOpen={props.onPopupOpen} onRegister={props.onRegister} onLogin={props.onLogin} />
            <SearchForm findSavedFilms={props.findSavedFilms} handleCheckedClick={props.handleCheckedClick} />
            <MoviesCardList cards={props.cards} deleteCard={props.deleteCard} isCardsMessage={props.isCardsMessage} isCards={props.isCards} setCards={props.setCards} getViewedCards={props.getViewedCards} />
            <Footer />
            <Popup isOpen={props.isPopupOpen} onClose={props.onPopupClose}>
                <>
                    <Link to="/" className="saved-movies-navigation__main_popup" onClick={props.onPopupClose}>Главная</Link>
                    <Link to="/movies" className="saved-movies-navigation__movies_popup" onClick={props.onPopupClose}>Фильмы</Link>
                    <p className="saved-movies-navigation__saved-movies_popup">Сохранённые фильмы</p>
                    <Link to="/profile" className="saved-movies-navigation__profile_popup" onClick={props.onPopupClose}>
                        <div className="saved-movies-navigation__profile_image"></div>
                        <p className="saved-movies-navigation__profile_text">Аккаунт</p>
                    </Link>
                </>
            </Popup>
        </>
    );
}

export default SavedMovies;