import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Products.css'; 
import Category from '../../components/Category'; // Import your Category component

export default function Products() {
    return (
        <div className="products-container">            
            <Category category="electronics" />
            <Category category="vehicles" />
            <Category category="clothing" />
        </div>
    );
};

