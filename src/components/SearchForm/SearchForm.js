import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {
    let location = useLocation();

    const [keyword, setKeyword] = React.useState('');
    const [errorKeyword, seterrorKeyword] = React.useState('');
    const [formValid, setFormValid] = React.useState(false);
    
    React.useEffect(() => {
        setKeyword(props.keyword);
    }, []);

    function handleChange(e) {
        const error = e.target.validationMessage;

        setKeyword(e.target.value);
        seterrorKeyword(error);
        setFormValid(e.target.closest('form').checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        props.findFilms(keyword);
        setKeyword(keyword);
    }

    function handleSavedSubmit(e) {
        e.preventDefault();
        
        props.findSavedFilms(keyword);
    }

    return (
        <form className="search-form" onSubmit={location.pathname === "/saved-movies" ? handleSavedSubmit : handleSubmit}>
            <div className="search-form__line">
                <input type="text" name="keyword" placeholder="Фильм" className="search-form__line_input" value={keyword || ''} onChange={handleChange} required />
                <button type="submit" className={`search-form__line_button ${formValid ? '' : 'search-form__line_button_disabled'}`} disabled={!formValid}>Поиск</button>
            </div>
            <span className="search-form__error">{errorKeyword}</span>
            <FilterCheckbox handleCheckedClick={props.handleCheckedClick} isChecked={props.isChecked} />
        </form>
    );
}

export default SearchForm;