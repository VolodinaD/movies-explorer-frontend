import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p id="сopyright" className="footer__сopyright">&copy; 2023</p>
                <div id="links" className="footer__links">
                    <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link" rel="noreferrer">Яндекс.Практикум</a>
                    <a href="https://github.com/" target="_blank" className="footer__link" rel="noreferrer">Github</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 