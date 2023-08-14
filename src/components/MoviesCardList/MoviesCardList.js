import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
    let location = useLocation();

    const [isOpenCards, setOpenCards] = React.useState(0);

    const handleResize = () => {
        if (window.innerWidth >= 1134) {
            props.setCards(12);
            setOpenCards(3);
        } else if ((window.innerWidth >= 768) && (window.innerWidth < 1133)) {
            props.setCards(8);
            setOpenCards(2);
        } else if ((window.innerWidth >= 320) && (window.innerWidth < 767)) {
            props.setCards(5);
            setOpenCards(2);
        }
    }

    React.useEffect(() => {
        let {cards,openCards} = props.getViewedCards();
        props.setCards(cards);
        setOpenCards(openCards);
        window.addEventListener('resize', handleResize);
    }, []);

    function handleCardsClick() {
        props.setCards(props.isCards + isOpenCards);
    }

    if (props.cards.length === 0) {
        return (
            <p className="cards__message">{props.isCardsMessage}</p>
        );
    } else if (location.pathname === "/movies") {
        return (
            <section>
                <ul className={`cards ${props.isCards >= props.cards.length ? 'cards_bottom' : ''}`}>
                    {props.cards.slice(0, props.isCards).map((item) => {
                        return (
                            <MoviesCard card={item} key={item.id} likeCard={props.likeCard} deleteCard={props.deleteCard} />
                        );
                    })}
                </ul>
                <button type="button" className={`cards__button ${(props.isCards >= props.cards.length) ? 'cards__button_remove' : ''}`} onClick={handleCardsClick}>Ещё</button>
            </section>
        );
    } else if (location.pathname === "/saved-movies") {
        return (
            <section>
                <ul className="cards cards_bottom">
                    {props.cards.map((item) => {
                        return (
                            <MoviesCard card={item} key={item._id} likeCard={props.likeCard} deleteCard={props.deleteCard} />
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default MoviesCardList; 