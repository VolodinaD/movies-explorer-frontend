import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
    let location = useLocation();

    function handleLikeClick() {
        props.likeCard(props.card);  
        props.card.saved = true;
    }

    function handleDeleteLike() {
        props.deleteCard(props.card);
        props.card.saved = false;
    }

    return (
        <li className="card">
            <div className="card__info">
                <h2 className="card__name">{props.card.nameRU}</h2>
                <p className="card__duration">{props.card.duration < 60 ? `${props.card.duration} минут` : `${props.card.duration / 60 | 0} ч ${props.card.duration % 60} мин`}</p>
            </div>
            <a href={props.card.trailerLink} target="_blank"><img className="card__image" src={location.pathname === "/saved-movies" ? props.card.image : `https://api.nomoreparties.co${props.card.image.url}`} alt={`${props.card.nameRU}`} /></a>
            <button type="button" className={location.pathname === "/saved-movies" ? 'card__delete-button' : `card__like-button ${props.card.saved ? 'card__like-button_active' : ''}`} onClick={location.pathname === "/saved-movies" ? handleDeleteLike : props.card.saved ? handleDeleteLike : handleLikeClick}>Сохранить</button>
        </li>
    );
}

export default MoviesCard; 