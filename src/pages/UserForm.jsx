import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const UserForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    });

    const [message, setMessage] = useState('');
    const [showThankYouLogin, setShowThankYouLogin] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await postUsers(formData);
        setFormData({
            username: '',
            email: '',
            password: '',
            first_name: '',
            last_name: '',
        });
        setShowThankYouLogin(true);
        setTimeout(() => {
            setShowThankYouLogin(false);
            onClose();
        }, 3000);
        } catch (error) {
        setMessage('Failed to create user. Please input.');
        }
    };

    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />

            <label>First Name</label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />

            <label>Last Name</label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />

            <button type="submit">Create User</button>
            <button type="button" onClick={onClose}>Close</button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>

        {showThankYouLogin && <ThankYouLoginPop onClose={() => setShowThankYouLogin(false)} />}
        </div>

        
    );
    };

export default UserForm;
