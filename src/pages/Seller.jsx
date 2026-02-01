import React from 'react';

const Seller = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center', marginTop: '60px' }}>
            <h1>Become a Seller</h1>
            <p>Start your business with us today! Reach crores of customers.</p>
            <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80"
                alt="Seller Hub"
                style={{ maxWidth: '80%', marginTop: '20px', borderRadius: '4px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            />
            <div style={{ marginTop: '30px' }}>
                <button style={{
                    background: '#2874f0',
                    color: 'white',
                    padding: '12px 30px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                    Start Selling
                </button>
            </div>
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#2874f0' }}>11 Lakh+</h3>
                    <p>Sellers community</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#2874f0' }}>24x7</h3>
                    <p>Online Support</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#2874f0' }}>7 Days</h3>
                    <p>Payment Cycle</p>
                </div>
            </div>
        </div>
    );
};

export default Seller;
