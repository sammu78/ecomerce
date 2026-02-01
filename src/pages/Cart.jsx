import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import './Cart.css';

const Cart = () => {
    const { cart, setCart, removeFromCart } = useContext(DataContext);
    const [paymentMethod, setPaymentMethod] = useState(''); // 'upi' or 'cod'
    const [upiId, setUpiId] = useState('');

    const totalAmount = cart.reduce((acc, item) => acc + item.price.cost, 0);
    const totalDiscount = cart.reduce((acc, item) => acc + (item.price.mrp - item.price.cost), 0);

    const handlePlaceOrder = async () => {
        if (!paymentMethod) {
            alert("Please select a payment method!");
            return;
        }
        if (paymentMethod === 'upi' && !upiId) {
            alert("Please enter your UPI ID!");
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/cart/checkout', {
                method: 'POST'
            });
            const data = await res.json();
            if (data.success) {
                alert(`Order Placed Successfully via ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI'}!`);
                setCart([]); // Clear local cart
            }
        } catch (error) {
            console.error("Checkout Failed", error);
        }
    };

    return (
        <div className="cart-container">
            <div className="cart-left">
                <div className="cart-header">
                    <h3>My Cart ({cart.length})</h3>
                </div>
                {cart.length === 0 ? (
                    <div className="empty-cart">Your cart is empty!</div>
                ) : (
                    <>
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="item-left">
                                    <img src={item.url} alt={item.title.shortTitle} className="item-img" referrerPolicy="no-referrer" />
                                </div>
                                <div className="item-right">
                                    <p className="item-title">{item.title.longTitle}</p>
                                    <p className="item-subtitle">Seller: RetailNet</p>
                                    <div className="item-price-section">
                                        <span className="item-cost">₹{item.price.cost}</span>
                                        <span className="item-mrp">₹{item.price.mrp}</span>
                                        <span className="item-discount">{item.price.discount} Off</span>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>REMOVE</button>
                                </div>
                            </div>
                        ))}

                        {/* Payment Options Section */}
                        <div className="payment-options">
                            <h3>Payment Options</h3>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    name="payment"
                                    id="cod"
                                    value="cod"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label htmlFor="cod">Cash on Delivery</label>
                            </div>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    name="payment"
                                    id="upi"
                                    value="upi"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label htmlFor="upi">UPI</label>
                            </div>

                            {paymentMethod === 'upi' && (
                                <div className="upi-input-container">
                                    <input
                                        type="text"
                                        placeholder="Enter UPI ID"
                                        className="upi-input"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="place-order">
                            <button className="place-order-btn" onClick={handlePlaceOrder}>PLACE ORDER</button>
                        </div>
                    </>
                )}
            </div>
            <div className="cart-right">
                <div className="price-details-header">PRICE DETAILS</div>
                <div className="price-details-body">
                    <div className="price-row">
                        <span>Price ({cart.length} items)</span>
                        <span>₹{totalAmount + totalDiscount}</span>
                    </div>
                    <div className="price-row">
                        <span>Discount</span>
                        <span className="green-text">- ₹{totalDiscount}</span>
                    </div>
                    <div className="price-row">
                        <span>Delivery Charges</span>
                        <span className="green-text">FREE</span>
                    </div>
                    <div className="total-amount-row">
                        <span>Total Amount</span>
                        <span>₹{totalAmount}</span>
                    </div>
                    <div className="savings-row">
                        You will save ₹{totalDiscount} on this order
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
