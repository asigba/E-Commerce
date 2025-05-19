import React from "react";

export default function ShippingForm() {

    

    return(<>      
      
            <h2>Shipping Information</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" required />
            </div>
            <div>
                <label htmlFor="state">State:</label>
                <input type="text" id="state" name="state" required />
            </div>
            <div>
                <label htmlFor="zip">Zip Code:</label>
                <input type="text" id="zip" name="zip" required />
            </div>           
        
    </>);
}