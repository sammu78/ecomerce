import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(DataContext);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div className="product-img-container">
                <img
                    src={product.url}
                    alt={product.title.shortTitle}
                    className="product-img"
                    referrerPolicy="no-referrer"
                />
                <div className="favorite-icon">
                    <svg width="18" height="18" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" className="_1l0elc">
                        <path d="M8.695 16.682C4.06 12.382 1 9.6 1 6.065 1 3.21 3.235 1 6.095 1c1.61 0 3.16.81 4.225 2.09C11.365 1.81 12.915 1 14.525 1 17.385 1 19.62 3.21 19.62 6.065c0 3.535-3.06 6.316-7.695 10.617L10.312 18 8.695 16.682z" fill="#c2c2c2" stroke="#FFF" fillRule="evenodd" opacity=".9"></path>
                    </svg>
                </div>
            </div>
            <div className="product-details">
                <h3 className="product-title" title={product.title.longTitle}>{product.title.shortTitle}</h3>
                <p className="product-subtitle">Usually ships in 2 days</p>

                <div className="price-container">
                    <span className="product-price">₹{product.price.cost}</span>
                    <span className="product-mrp">₹{product.price.mrp}</span>
                    <span className="product-discount">{product.price.discount} off</span>
                </div>

                <p className="free-delivery">Free delivery</p>

                <div className="rating-badge-container" style={{ marginBottom: '10px' }}>
                    <span className="rating-badge">
                        4.4 <span className="star">★</span>
                    </span>
                    <span className="rating-count">(1,234)</span>
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="add-to-cart-btn"
                    style={{ background: '#ff9f00', color: 'white', width: '100%', padding: '8px', borderRadius: '2px', fontWeight: '500', marginTop: 'auto' }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
