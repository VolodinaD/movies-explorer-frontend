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
            <Header onMain={props.onMain}>
                <>
                    <Link to="/movies" className="saved-movies-navigation__movies">Фильмы</Link>
                    <p className="saved-movies-navigation__saved-movies">Сохранённые фильмы</p>
                    <Link to="/profile" className="saved-movies-navigation__profile">
                        <div className="saved-movies-navigation__profile_image"></div>
                        <p className="saved-movies-navigation__profile_text">Аккаунт</p>
                    </Link>
                    <button type="button" className="saved-movies-navigation__button" onClick={props.onPopupOpen}></button>
                </>
            </Header>
            <SearchForm />
            <MoviesCardList cards={props.cards}/>
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