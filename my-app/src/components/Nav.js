import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: '#000',
    };

    return (
        <nav>
            <Link style={ navStyle } to="/">
                <h1 className="navTitle">Entertainment-Co</h1>
            </Link>
            
            <ul className="nav-links">
                <Link style={ navStyle } to="/">
                    <li>Home</li>
                </Link>
                <Link style={ navStyle } to="/catalog">
                    <li>Catalog</li>
                </Link>
                <Link style={ navStyle } to="/cart">
                    <li>Cart</li>
                </Link>         
            </ul>
        </nav>
        
    );
}

export default Nav;
