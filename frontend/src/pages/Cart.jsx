import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import {isSignedIn} from '../context/AuthContext';


export default function Cart(){
    const {cartItems, removeItem} = useCart();
    const [total, setTotal] = useState(0);


    // const cartItems = [
    //     { id: 1, name: 'Product 1', price: 10.00, quantity: 2 },
    //     { id: 2, name: 'Product 2', price: 15.00, quantity: 1 },
    //     { id: 3, name: 'Product 3', price: 20.00, quantity: 3 },
    // ];

    const calculateTotal = () => {
        setTotal(cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));
    };

    useEffect(calculateTotal, [cartItems]);

    function handleQuantityChange(id, newQuantity) {
        removeItem(id, newQuantity);
    }

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
                                    <span>${item.price} x <select value={item.quantity} onChange={e => handleQuantityChange(item.id, e.target.value)}>{[...Array(10).keys()].map(n => (<option key={n + 1} value={n+1}>{n+1}</option>))}</select></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {isSignedIn ?
                    (<div className="cart-summary">
                        <h2>Total: ${total}</h2>
                        <Link to="/checkout" className="cart-checkout-button">
                            Proceed to Checkout
                        </Link>
                    </div>) : <Link to="/login" className="cart-checkout-button">
                        Please login to proceed to Checkout 
                        </Link>
                    }
                </div>
            )}
        </div>
    );
};