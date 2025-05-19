import React from "react";

export default function PaymentForm() {

    return (<>
        
            <h2>Payment Information</h2>
            <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div>
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input type="text" id="expiryDate" name="expiryDate" required />
            </div>
            <div>
                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" required />
            </div>
        
    </>);

}