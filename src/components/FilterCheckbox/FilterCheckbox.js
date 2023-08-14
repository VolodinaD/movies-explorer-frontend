import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    function handleChecked(e) {
        props.handleCheckedClick(e.target.checked);
    }

    return (
        <label className="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__toggle" checked={props.isChecked} onChange={handleChecked} />
            <span className="filter-checkbox__span" hidden></span>
            Короткометражки
        </label>
    );
}

export default FilterCheckbox;