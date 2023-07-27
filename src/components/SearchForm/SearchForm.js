import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {
    return (
        <section className="search-form">
            <div className="search-form__line">
                <input type="text" placeholder="Фильм" className="search-form__line_input" />
                <button type="button" className="search-form__line_button">Поиск</button>
            </div>
            <FilterCheckbox />
        </section>
    );
}

export default SearchForm;