import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-title">ABOUT</h3>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Flipkart Stories</a>
                    <a href="#">Press</a>
                    <a href="#">Corporate Information</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">HELP</h3>
                    <a href="#">Payments</a>
                    <a href="#">Shipping</a>
                    <a href="#">Cancellation & Returns</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">CONSUMER POLICY</h3>
                    <a href="#">Return Policy</a>
                    <a href="#">Terms Of Use</a>
                    <a href="#">Security</a>
                    <a href="#">Privacy</a>
                    <a href="#">Sitemap</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-title">SOCIAL</h3>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">YouTube</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 Flipkart Clone. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
