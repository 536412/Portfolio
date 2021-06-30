import React from 'react';
import "./navbar.css";

const NavbarComponent = () => {
    return(
        <div id="navbar">
            <ul>
            <h4>{"< Alper Aydinhan />"}</h4>
            <li><a href="#contact">Contacts</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#header">About</a></li>
            </ul>
        </div>
    );
}

export default NavbarComponent;