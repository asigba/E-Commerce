import React from "react";

export default function PaymentForm({formData, handleChange, errors}) {

    return (<div className="payment-form">
            <h2>Payment Information</h2>
            <div className="form-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} maxLength={16} required />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" maxLength={5} required />
                    {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                </div>
                <div>
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} maxLength={4} required />
                    {errors.cvv && <span className="error">{errors.cvv}</span>}
                </div>
            </div>
        
    </div>);

}