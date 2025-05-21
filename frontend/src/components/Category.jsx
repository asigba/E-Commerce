import {useEffect, useState} from "react";

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
    }, [products]);

    function toTitleCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const categoryTitle = toTitleCase(category);

    return (
        <div className="category-container">
            {products.length !==0 && <h2 className="category-title">{categoryTitle}</h2>}
            {products.length !== 0 && products.map((product) => (
                <div key={product.id} className='category-card'>
                    <img src={product.image} alt={product.name} className="category-image"/>
                    <h3 className="category-name">{product.name}</h3>
                    <p className="category-price">${product.price}</p>
                </div>
            ))}

        </div>
    );
}