import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    const setAuthToken = (token) => {
        axios.defaults.headers.common['x-auth-token'] = token;
    };

    const fetchUser = async () => {
        try {
            const res = await axios.get('/api/auth');
            setUser(res.data);
        } catch (err) {
            console.error("Failed to fetch user:", err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setAuthToken(res.data.token);
            await fetchUser();
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    const register = async (username, email, password) => {
        try {
            const res = await axios.post('/api/auth/register', { username, email, password });
            localStorage.setItem('token', res.data.token);
            setAuthToken(res.data.token);
            await fetchUser();
        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        removeAuthToken();
        setUser(null);
    };

    const removeAuthToken = () => {
        delete axios.defaults.headers.common['x-auth-token'];
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {React.Children.map(children, child => {
                return React.cloneElement(child, { user });
            })}
        </AuthContext.Provider>
    );
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
