import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
    let location = useLocation();

    const [isLiked, setLikeClick] = React.useState(false);

    function handleLikeClick() {
        setLikeClick(true);
    }

    function handleDeleteLike() {
        setLikeClick(false);
    }

    return (
        <li className="card">
            <div className="card__info">
                <h2 className="card__name">{props.card.nameRU}</h2>
                <p className="card__duration">{`${props.card.duration} минут`}</p>
            </div>
            <img className="card__image" src={location.pathname === "/saved-movies" ? props.card.image : `https://api.nomoreparties.co${props.card.image.url}`} alt={`${props.card.nameRU}`} />
            <button type="button" className={location.pathname === "/saved-movies" ? 'card__delete-button' : `card__like-button ${isLiked ? 'card__like-button_active' : ''}`} onClick={isLiked ? handleDeleteLike : handleLikeClick}>Сохранить</button>
        </li>
    );
}

export default MoviesCard; 