import React from 'react';
import "./navbar.css";

const NavbarComponent = () => {
    return(
        <div id="navbar">
            <ul>
            <h4>{"< Alper Aydinhan />"}</h4>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#education">Education</a></li>
            </ul>
        </div>
    );
}

export default NavbarComponent;