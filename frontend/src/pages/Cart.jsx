import React from 'react';

export default function Cart(){
    const cartItems = [
        { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
        { id: 3, name: 'Product 3', price: 19.99, quantity: 3 },
    ];

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
                </div>
            )}
        </div>
    );
};