import React from 'react';
import './ErrorPage.css';

function ErrorPage(props) {
    return (
        <section className="error">
            <h2 className="error__title">404</h2>
            <p className="error__text">Страница не найдена</p>
            <button type="button" className="error__button" onClick={props.goBack}>Назад</button>
        </section>
    );
}

export default ErrorPage;