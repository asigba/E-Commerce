import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">ALYX</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/carts">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>

        </nav>
    );
}