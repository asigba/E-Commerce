import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails(){
    const API_URL = process.env.REACT_APP_PRODUCT_URL;
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch(`${API_URL}/api/products/${productId}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setProduct(data);
    //         setLoading(false);
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching products:', error);
    //         setLoading(false);
    //     });
    // },[]);

    useEffect(() => {

            const fetchProduct = async () => {
                try {
                    const response = await fetch(`${API_URL}/api/products/${productId}`);
                    if(!response.ok) {
                        throw new Error(`HTTP ERROR! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    setProduct(data);
                } catch (error) {
                    console.error('Error fetching products:', error);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchProduct();
        }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            {/* <p>{product.description}</p> */}
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

