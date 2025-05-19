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
        zipcode: '',
        country: '',
        cardNumber:'',
        expiryDate:'',
        cvv:''
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    function validate(formData) {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.zipcode) newErrors.zipcode = 'Zip code is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
        if (!formData.cvv) newErrors.cvv = 'CVV is required';
        return newErrors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // simulate errors
        setErrors({});
        // simulate a successful form submission
        setSuccess('Form submitted successfully!');
        

        console.log('Form submitted:', formData);
        // Add logic to process the checkout
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <CartSummary />
            {success && <div className="success-message">{success}</div>}   
            {Object.keys(errors).length > 0 && (
                <div className="error-message">
                    <ul>
                        {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <ShippingForm formData={formData} handleChange={handleChange} errors={errors}/>
                <PaymentForm formData={formData} handleChange={handleChange} errors={errors}/>
                <CheckoutButton />
            </form>
            
        </div>
    );
};
