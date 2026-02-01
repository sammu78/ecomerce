import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext(null);

import { API_URL } from '../config';

const DataContextProvider = ({ children }) => {
    const [account, setAccount] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async (query = '') => {
        try {
            const url = query ? `${API_URL}/api/products?q=${query}` : `${API_URL}/api/products`;
            const prodRes = await fetch(url);
            if (prodRes.ok) setProducts(await prodRes.json());
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    useEffect(() => {
        // Fetch initial data
        const fetchData = async () => {
            try {
                await fetchProducts(); // Initial fetch
                const catRes = await fetch(`${API_URL}/api/categories`);
                if (catRes.ok) setCategories(await catRes.json());
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };
        fetchData();
    }, []);

    const login = async (username, password) => {
        try {
            const res = await fetch(`${API_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (data.success) {
                setAccount(data.user.username);
                return true;
            }
        } catch (error) {
            console.error(error);
        }
        return false;
    };

    const addToCart = async (product) => {
        try {
            const res = await fetch(`${API_URL}/api/cart`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            if (res.ok) {
                const data = await res.json();
                setCart(data.cart);
                alert("Added to Cart!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const removeFromCart = async (id) => {
        try {
            const res = await fetch(`${API_URL}/api/cart/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                const data = await res.json();
                setCart(data.cart);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const searchProducts = (text) => {
        fetchProducts(text);
    };

    return (
        <DataContext.Provider value={{
            account,
            setAccount,
            products,
            categories,
            cart,
            setCart,
            login,
            addToCart,
            removeFromCart,
            searchProducts
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
