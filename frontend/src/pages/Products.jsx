import React, { useEffect, useState } from 'react';

export default function Products() {
    const API_URL = "http://localhost:5001";
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching products from an API
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_URL}}/api/products`); // Replace with your API endpoint
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
        <div>
            <h1>Products</h1>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};
