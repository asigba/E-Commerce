import React from "react";

export default function ShippingForm(props) {

    const { formData, handleChange, errors } = props;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange({ ...formData, [name]: value });
    }

    return(<div className="shipping-form">        
      
            <h2>Shipping Information</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
             <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={formData.email} onChange={handleInputChange} />
                {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input id="city" name="city" value={formData.city} onChange={handleInputChange} />
                    {errors.city && <span className="field-error">{errors.city}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleInputChange} />
                    {errors.zipcode && <span className="field-error">{errors.zipcode}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input id="country" name="country" value={formData.country} onChange={handleInputChange} />
                    {errors.country && <span className="field-error">{errors.country}</span>}
                </div>   
            </div>   
        
    </div>);
}