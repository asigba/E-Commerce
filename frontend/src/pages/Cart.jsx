import React from 'react';
import { useCart } from './CartContext';

export default function Cart(){
    const {cartItems} = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} style={{ marginBottom: '10px' }}>
                                <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ${calculateTotal()}</h2>
                    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Checkout</button>
                    <Link to="/checkout" style={{ textDecoration: 'none', color: 'white' }}>Checkout</Link>
                </div>
            )}
        </div>
    );
};