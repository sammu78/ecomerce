import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import './CategoryBar.css';

const CategoryBar = () => {
    const { categories } = useContext(DataContext);

    return (
        <div className="category-bar">
            <div className="category-container">
                {categories.map((category, index) => (
                    <div key={index} className="category-item">
                        <div className="category-img-container">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="category-img"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <p className="category-text">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBar;
