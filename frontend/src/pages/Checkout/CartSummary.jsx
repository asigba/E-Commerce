import React from 'react';
import {useCart} from '../../context/CartContext';
import './CartSummary.css';

export default function CartSummary() {
    const { cartItems } = useCart();

    function calculateTotal() {
        return cartItems.reduce((total, item) => total + item.price * item.quantity,0).toFixed(2); 
    }

    return(<div className="cart-summary-container">
        <h2 className="cart-summary-title">Order Summary</h2>
        
            <ul className='cart-summary-items'>
                {cartItems.map((item) => (
                    <li key={item.id} className='cart-summary-item-details'>
                        <span className='cart-summary-item-name'>{item.name}</span>
                        <span className='cart-summary-item-quatity'> ${item.price} x {item.quantity}</span>
                    </li>
                ))}
            </ul>
            <div className='cart-summary-total'>
                <strong>Total:</strong> ${calculateTotal()}
            </div>
        
    </div>);
}