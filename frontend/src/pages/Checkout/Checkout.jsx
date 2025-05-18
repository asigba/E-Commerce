import React, { useState } from 'react';
import CartSummary from './CartSummary';
import CheckoutButton from './CheckoutButton';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import './Checkout.css';


export default function Checkout (){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add logic to process the checkout
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <CartSummary />
            <ShippingForm />
            <PaymentForm />
            <CheckoutButton />
        </div>
    );
};
