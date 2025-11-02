
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        // Optional: Add logic to validate token (e.g., check expiry or ping server)
        if (token) {
            setAuth({ token });
        } else {
            setAuth(null);
            window.localStorage.removeItem("token"); // Clear any invalid token
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}


