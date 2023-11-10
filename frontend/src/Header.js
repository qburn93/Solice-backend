import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // assuming you have a Header.css file

function Header() {
    return (
        <header>
            <Link to="/" className="hover-underline-animation">
                <h1 id="logo">Solar</h1>
            </Link>
            <nav>
                <ul id="menu">
                    <li>
                        <Link to="/contact" className="hover-underline-animation">Contact</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="hover-underline-animation">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover-underline-animation">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;