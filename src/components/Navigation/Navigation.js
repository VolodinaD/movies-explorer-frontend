import React from 'react';
import './Navigation.css';

function Navigation(props) {
    return (
        <nav className="navigation">
            {props.children}
        </nav>
    );
}

export default Navigation;