import React, { useContext } from 'react';
import CategoryBar from '../components/CategoryBar';
import ProductSection from '../components/ProductSection';
import { DataContext } from '../context/DataProvider';
import './Home.css';

const Home = () => {
    const { products } = useContext(DataContext);

    return (
        <div className="home-container">
            <CategoryBar />

            {/* Simple Hero Banner */}
            <div className="hero-banner">
                <img
                    src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50"
                    alt="Big Billion Days"
                    className="banner-img"
                />
            </div>

            <div className="content-wrapper">
                <ProductSection title="Deals of the Day" products={products} />
                <ProductSection title="Best of Electronics" products={products} />
                <ProductSection title="Beauty, Food, Toys & more" products={products} />
            </div>
        </div>
    );
};

export default Home;
