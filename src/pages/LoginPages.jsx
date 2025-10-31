
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";

function LoginPage() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password)
                .then((response) => {
                    window.localStorage.setItem("token", response.token);
                    navigate("/");
                })
                .catch((error) => {
                    console.error("Login failed:", error);
                    alert("Login failed. Please check your credentials.");
                });
        }
    };

    return (
        <div className="login-page">
            <h1>This is the login page</h1>
            <div className="login-form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                    />
                    <button type="submit">Login</button>
                    <button type="button" onClick={() => navigate("/")}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;



