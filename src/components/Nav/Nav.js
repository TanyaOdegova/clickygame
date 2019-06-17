import React from 'react';
import './Nav.css';

    const Nav = props => (
        <nav className="navbar navbar-default" >
            <ul>
                <li className="brand">archer</li>
                <li>Clicky Game</li>
                <li>Current Score: {props.score} | Top Score: {props.highScore}  </li>
            </ul>
        </nav>
    );
    
    
    export default Nav;