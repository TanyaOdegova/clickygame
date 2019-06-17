import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="navbar navbar-default" >
        <ul>
            <li className="brand">Clicky Game</li>
            <li>Click on the image to begin!</li>
            <li>Score: {props.score} | Top Score: {props.topScore}  </li>
        </ul>
    </nav>
);


export default Nav;