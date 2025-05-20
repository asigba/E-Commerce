import React from "react";

export default function ShippingForm({formData, handleChange, errors}) {

    return(<div className="shipping-form">        
      
            <h2>Shipping Information</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
             <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input id="city" name="city" value={formData.city} onChange={handleChange} />
                    {errors.city && <span className="field-error">{errors.city}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} />
                    {errors.zipcode && <span className="field-error">{errors.zipcode}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input id="country" name="country" value={formData.country} onChange={handleChange} />
                    {errors.country && <span className="field-error">{errors.country}</span>}
                </div>   
            </div>   
        
    </div>);
}