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
            <Header onMain={props.onMain}>
                <>
                    <p className="movies-navigation__movies">Фильмы</p>
                    <Link to="/saved-movies" className="movies-navigation__saved-movies">Сохранённые фильмы</Link>
                    <Link to="/profile" className="movies-navigation__profile">
                        <div className="movies-navigation__profile_image"></div>
                        <p className="movies-navigation__profile_text">Аккаунт</p>
                    </Link>
                    <button type="button" className="movies-navigation__button" onClick={props.onPopupOpen}></button>
                </>
            </Header>
            <SearchForm />
            <MoviesCardList cards={props.cards}/>
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