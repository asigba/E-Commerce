import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                // Increase quantity if already in cart
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new product to cart
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeItem = (Id, newQuantity) => {
        setCartItems(items => items.map(item => item.id === Id ? {...item, quantity: Number(newQuantity)} : item));
    };

    const value = { cartItems, addToCart, removeItem };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}