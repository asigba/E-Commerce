import React from 'react';

export default function OrderConfirmation() {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been successfully placed.</p>
            <p>We will send you a confirmation email with the details shortly.</p>
            <button 
                style={{
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => window.location.href = '/'}
            >
                Back to Home
            </button>
        </div>
    );
};

