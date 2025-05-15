import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
    const [isSignIn, setIsSignedIn] = useState('false');

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">ALYX</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/carts">Cart</Link></li>
            </ul>

        </nav>
    );
}