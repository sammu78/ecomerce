import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import './DetailView.css';

import { API_URL } from '../config';

const DetailView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`${API_URL}/api/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product", error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleBuyNow = () => {
        addToCart(product);
        navigate('/cart');
    };

    if (!product) return <div style={{ marginTop: '100px', textAlign: 'center' }}>Loading...</div>;

    return (
        <div className="container">
            <div className="component">
                <div className="left-container">
                    <img src={product.detailUrl || product.url} alt={product.title.longTitle} className="detail-image" referrerPolicy="no-referrer" />
                    <div className="button-container">
                        <button className="buy-btn cart-btn" onClick={() => addToCart(product)}>ADD TO CART</button>
                        <button className="buy-btn buy-now-btn" onClick={handleBuyNow}>BUY NOW</button>
                    </div>
                </div>
                <div className="right-container">
                    <h3 className="title">{product.title.longTitle}</h3>
                    <p className="rating-row">
                        <span className="rating-badge">4.4 ★</span>
                        <span className="rating-count">8 Ratings & 1 Reviews</span>
                    </p>
                    <p className="price-row">
                        <span className="price">₹{product.price.cost}</span>
                        <span className="mrp">₹{product.price.mrp}</span>
                        <span className="discount">{product.price.discount} off</span>
                    </p>
                    <div className="offers">
                        <h5>Available offers</h5>
                        <p>Special PriceGet extra 10% off (price inclusive of discount)</p>
                        <p>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
                    </div>
                    <div className="description">
                        <h5>Description</h5>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailView;
