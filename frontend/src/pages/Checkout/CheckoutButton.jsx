import React from 'react';

export default function CheckoutButton({loading, disabled}) {
    return(<>
        <button type="submit" className="checkout-button" disabled={loading || disabled} >{loading? 'Processing...' : 'Confirm'}</button>
    </>);
}