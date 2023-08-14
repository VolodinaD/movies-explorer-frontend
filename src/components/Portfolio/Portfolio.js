import React from 'react';
import './Portfolio.css';

function Portfolio(props) {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <a href="https://github.com/VolodinaD/how-to-learn" target="_blank" className="portfolio__link_text">Статичный сайт</a>
                    <a href="https://github.com/VolodinaD/how-to-learn" target="_blank" className="portfolio__link_image">↗</a>
                </li>
                <li className="portfolio__link">
                    <a href="https://github.com/VolodinaD/russian-travel" target="_blank" className="portfolio__link_text">Адаптивный сайт</a>
                    <a href="https://github.com/VolodinaD/russian-travel" target="_blank" className="portfolio__link_image">↗</a>
                </li>
                <li className="portfolio__link">
                    <a href="https://github.com/VolodinaD/react-mesto-api-full-gha" target="_blank" className="portfolio__link_text">Одностраничное приложение</a>
                    <a href="https://github.com/VolodinaD/react-mesto-api-full-gha" target="_blank" className="portfolio__link_image">↗</a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;