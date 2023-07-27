import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
    const [isCards, setCards] = React.useState(0);
    const [isOpenCards, setOpenCards] = React.useState(0);

    React.useEffect(() => {
        if (window.innerWidth >= 1280) {
            setCards(12);
            setOpenCards(12);
        } else if ((window.innerWidth >= 641) && (window.innerWidth < 1280)) {
            setCards(8);
            setOpenCards(8);
        } else if ((window.innerWidth >= 320) && (window.innerWidth < 641)) {
            setCards(5);
            setOpenCards(5);
        }
    }, []);
        
    function handleCardsClick() {
        setCards(isCards + isOpenCards);
    }
    
    return (
        <section>
            <ul className={`cards ${isCards >= props.cards.length ? 'cards_bottom' : ''}`}>
                {props.cards.slice(0, isCards).map((item) => {
                    return (
                        <MoviesCard card={item} key={item.id} />
                    );
                })}
            </ul>
            <button type="button" className={`cards__button ${isCards >= props.cards.length ? 'cards__button_remove' : ''}`} onClick={handleCardsClick}>Ещё</button>
        </section>
    );
}

export default MoviesCardList; 