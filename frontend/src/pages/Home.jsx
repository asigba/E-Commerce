import React, { use, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
    const [products, setProducts] = React.useState([]); 
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
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
        <div>
            <header className="home-header">
                <h1>Welcome to Our Store</h1>
                <p>Your one-stop shop for all your needs!</p>
                <button><Link to="/products">Shop Now</Link></button>
            </header>
            <section>
                <h2 className="feature-products">Featured Products</h2>
                {loading ? (
                    <p>Loading products...</p>
                ): (<div className="product-list">
                        {products.map((product) => (
                            <div key={product.id} className='product-item'>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <button><Link to={`/products/${product.id}`}>View Details</Link></button>
                            </div>
                        ))}
                    </div>
                    )}
            </section>
        </div>
    );
}