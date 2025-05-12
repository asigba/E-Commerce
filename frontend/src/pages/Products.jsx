import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Products.css'; 

export default function Products() {
    const API_URL = process.env.REACT_APP_PRODUCT_URL || "http://localhost:5001";
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching products from an API
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_URL}/api/products`); // Replace with your API endpoint
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <div className="products-container">
            <h1>Products</h1>
            {products.length > 0 ? (
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <h2>{product.name}</h2>
                            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} className="product-image"/>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <Link to={`/products/${product.id}`} className="details-button">View Details</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};
