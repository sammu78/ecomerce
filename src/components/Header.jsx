import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import LoginDialog from './LoginDialog';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [searchText, setSearchText] = useState('');
    const { account, cart, searchProducts } = useContext(DataContext);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        searchProducts(e.target.value);
    };

    return (
        <>
            <header className="header">
                <div className="header-container">
                    {/* Logo Section */}
                    <Link to="/" className="logo-section" style={{ textDecoration: 'none' }}>
                        <h1 className="logo-text">AMS</h1>
                        <div className="explore-plus">
                            <span className="explore-text">Explore <span className="plus-text">Plus</span></span>
                            <img
                                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                                alt="plus"
                                className="plus-icon"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for products, brands and more"
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <button className="search-btn">
                            <svg width="20" height="20" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#2874F0" fillRule="evenodd">
                                    <path className="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                                    <path className="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                                </g>
                            </svg>
                        </button>
                    </div>

                    {/* Login Button */}
                    <div className="login-btn-container">
                        {account ? (
                            <div className="user-profile" style={{ color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                                {account}
                            </div>
                        ) : (
                            <button className="login-btn" onClick={() => setOpenLogin(true)}>Login</button>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <Link to="/seller" className="nav-item" style={{ textDecoration: 'none', color: 'inherit' }}>Become a Seller</Link>

                        <div className="nav-item dropdown-container">
                            <div className="dropdown-label">
                                More
                                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="dropdown-icon">
                                    <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" transform="rotate(-90 8 13.58)"></path>
                                </svg>
                            </div>
                            {/* Dropdown Menu Content */}
                            <div className="dropdown-menu">
                                <div className="dropdown-item">Notification Preferences</div>
                                <div className="dropdown-item">24x7 Customer Care</div>
                                <div className="dropdown-item">Advertise</div>
                                <div className="dropdown-item">Download App</div>
                            </div>
                        </div>

                        <Link to="/cart" className="nav-item cart" style={{ textDecoration: 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <svg className="cart-icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.119 9.767c.165.644.67 1.44 1.33 1.44h9.55c.31 0 .54-.234.54-.535v-.53c0-.31-.23-.54-.54-.54H4.99c-.61 0-.448-.43-.448-.43l-.154-.46h10.92c.15 0 .29-.074.37-.2l.66-1.045.69-3.8c.08-.435-.14-.85-.59-.89l-.16-.01zm-3.08 8.65c-.755 0-1.375.62-1.375 1.375s.62 1.375 1.375 1.375 1.375-.62 1.375-1.375-.62-1.375-1.375-1.375zm-6.62 0c-.755 0-1.375.62-1.375 1.375s.62 1.375 1.375 1.375 1.375-.62 1.375-1.375-.62-1.375-1.375-1.375z" fill="#fff"></path>
                                </svg>
                                <span>Cart {cart.length > 0 && `(${cart.length})`}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            <LoginDialog open={openLogin} setOpen={setOpenLogin} />
        </>
    );
};

export default Header;
