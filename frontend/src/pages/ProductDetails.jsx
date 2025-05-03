import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails(){
    const API_URL = "http://localhost:5001";
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/api/products/${productId}`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    },[]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-details">
            <h1>{product[0].name}</h1>
            <img src={product[0].image} alt={product[0].name} />
            <p>{product[0].description}</p>
            <p>Price: ${product[0].price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

