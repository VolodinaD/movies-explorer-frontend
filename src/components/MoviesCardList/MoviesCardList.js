import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
    let location = useLocation();

    const [isCards, setCards] = React.useState(0);
    const [isOpenCards, setOpenCards] = React.useState(0);

    React.useEffect(() => {
        if (window.innerWidth >= 1280) {
            setCards(12);
            setOpenCards(3);
        } else if ((window.innerWidth >= 641) && (window.innerWidth < 1280)) {
            setCards(8);
            setOpenCards(2);
        } else if ((window.innerWidth >= 320) && (window.innerWidth < 641)) {
            setCards(5);
            setOpenCards(2);
        }
    }, []);
        
    function handleCardsClick() {
        setCards(isCards + isOpenCards);
    }

    if (props.cards.length === 0) {
        return (
            <p className="cards__message">Ничего не найдено</p>
        );
    } else {
        return (
            <section>
                <ul className={`cards ${isCards >= props.cards.length ? 'cards_bottom' : ''}`}>
                    {props.cards.slice(0, isCards).map((item) => {
                        return (
                            <MoviesCard card={item} key={location.pathname === "/saved-movies" ? item._id : item.id} likeCard={props.likeCard} deleteCard={props.deleteCard} />
                        );
                    })}
                </ul>
                <button type="button" className={`cards__button ${isCards >= props.cards.length ? 'cards__button_remove' : ''}`} onClick={handleCardsClick}>Ещё</button>
            </section>
        );
    }
}

export default MoviesCardList; 