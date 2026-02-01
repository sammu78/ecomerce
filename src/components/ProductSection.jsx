import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
    const handleViewAll = () => {
        alert("This is a demo! All available products are already displayed.");
    };

    return (
        <div className="product-section">
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
                <button className="view-all-btn" onClick={handleViewAll}>VIEW ALL</button>
            </div>
            <div className="products-container">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {/* Repeat products to fill space for demo */}
                {products.map(product => (
                    <ProductCard key={`${product.id}-copy`} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
