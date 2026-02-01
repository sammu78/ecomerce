import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import './LoginDialog.css';

const LoginDialog = ({ open, setOpen }) => {
    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('pass');
    const { login } = useContext(DataContext);

    const handleLogin = async () => {
        const success = await login(username, password);
        if (success) {
            setOpen(false);
        } else {
            alert("Invalid Login (Try user/pass)");
        }
    };

    if (!open) return null;

    return (
        <div className="login-overlay">
            <div className="login-modal">
                <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
                <div className="login-content">
                    <div className="login-left">
                        <h2>Login</h2>
                        <p>Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    <div className="login-right">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="login-submit-btn" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginDialog;
