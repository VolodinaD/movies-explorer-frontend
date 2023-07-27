import React from 'react';
import './Popup.css';

function Popup(props) {
    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <div className="popup__menu">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default Popup;