import React, { use, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Category from '../components/Category';

export default function Home() {
    const [products, setProducts] = React.useState([]); 
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('http://localhost:5001/api/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    },[]);

    return (
        <div className="home-container">
            <header className="home-hero">
                <div className="hero-content">
                    <h1>Welcome to Our Store</h1>
                    <p>Your one-stop shop for all your needs!</p>
                    <Link to="/products" className="shop-now-button">Shop Now</Link>
                </div>
            </header>

            <section className="featured-products">
                <h2>Featured Products</h2>
                {loading ? (
                    <p>Loading products...</p>
                ): (<div className="product-grid">
                        {products.map((product) => (
                            <div key={product.id} className='product-card'>
                                <img src={product.image} alt={product.name} className="product-image"/>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">${product.price}</p>
                                <Link to={`/products/${product.id}`} className="view-details-button">View Details</Link>
                            </div>
                        ))}
                    </div>
                    )}
            </section>
            <Category category="electronics" />
            <Category category="vehicles" />
            <Category category="clothing" />
            <Category category="home" />

        </div>
    );
}