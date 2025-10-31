
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "/src/hooks/use-auth.js";
import postLogin from "../api/post-login.js";
import "./LoginForm.css";

function LoginForm({ onClose }) {
    const navigate = useNavigate(); 
    const { auth, setAuth } = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password)
                .then((response) => {
                    window.localStorage.setItem("token", response.token);
                    setAuth({ token: response.token });
                    navigate("/");
                    onClose(); // Close the popup after successful login
                })
                .catch((error) => {
                    console.error("Login failed:", error);
                    alert("Login failed. Please check your credentials.");
                });
        }
    };

    return (
        <div className="login-overlay">
            <div className="login-content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                    <button type="submit">Login</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;


