
// src/context/AuthProvider.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({ token: null });

    useEffect(() => {
        const storedToken = window.localStorage.getItem("token");
        if (storedToken) {
            setAuth({ token: storedToken });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

