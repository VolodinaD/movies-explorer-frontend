import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__toggle" />
            <span className="filter-checkbox__span" hidden></span>
            Короткометражки
        </label>
    );
}

export default FilterCheckbox;