import React from 'react';
import { useState, useEffect } from 'react';

export default function ListProduct() {
    const [productForm, setProductForm] = useState({
        name: '',
        price: '',
        image: '',
        category: ''
        
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setProductForm({...productForm, [name]:value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5001/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productForm),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Product added successfully:', data);
            alert('Product added successfully!');
            setProductForm({
                name: '',
                price: '',
                image: '',
                category: ''
            });
        })
        .catch((error) => {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        });
    }

    return(<div className="list-product-container">
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Product Name:</label>
            <input type="text" id="name" name="name" value={productForm.name} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="price">Product Price:</label>        
            <input type="number" id="price" name="price" value={productForm.price} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="image">Product Image URL:</label>
            <input type="text" id="image" name="image" value={productForm.image} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="category">Product Category:</label>
            <input type="text" id="category" name="category" value={productForm.category} onChange={handleChange} required />
        </div>
        <button type="submit">Add Product</button>
    </form>
    </div>);
}