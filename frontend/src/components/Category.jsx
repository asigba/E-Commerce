import {useEffect, useState} from "react";
import './Category.css'; // Import your CSS file for styling
import { Link } from "react-router-dom"; // Import Link for navigation

export default function Category({ category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/api/products/${category}`)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    }, []);

    function toTitleCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const categoryTitle = toTitleCase(category);

    return (           
        <section className="category-section">
            {products.length !==0 && <h2>{categoryTitle}</h2>}
            <div className="product-flex">
            {products.length !== 0 && products.map((product) => (
                <div key={product.id} className='product-card'>
                    <img src={product.image} alt={product.name} className="product-image"/>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="view-details-button">View Details</Link>
                </div>
            ))}
            </div>
        </section>
    );
}