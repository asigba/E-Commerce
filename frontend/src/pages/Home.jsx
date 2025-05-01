import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our e-commerce app.</p>
            <nav>
                <ul>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}