import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

export default function Cart(){
    const {cartItems} = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <div className="cart-content">
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item-details">
                                    <strong>{item.name}</strong>
                                    <span>${item.price} x {item.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Total: ${calculateTotal()}</h2>
                        <Link to="/checkout" className="cart-checkout-button">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};