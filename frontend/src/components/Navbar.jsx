import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import './Navbar.css'; 

export default function Navbar() {
    const {isSignedIn,user, logout} = useContext(AuthContext);
    const userId = user ? user.id : null;
    const userName = user ? user.name : 'Guest'
    const link = userId ? `/users/${userId}` : '/login';

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">ALYX</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                {isSignedIn ? (
                    <>
                        <li><Link to={link}>{userName}</Link></li>
                        <li><Link onClick={logout} className="navbar-link logout-link">Logout</Link></li>
                    </>):(

                        <li><Link to="/login">Login</Link></li>
                    )}
            </ul>
        </nav>
    );
}