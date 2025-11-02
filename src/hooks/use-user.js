
// src/hooks/useUser.js
import { useState, useEffect } from "react";

function useUser(userId, token = null) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchUser = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/`, {
            headers: token
                ? {
                    "Authorization": `Token ${token}`,
                }
                : {},
            });

            if (!response.ok) {
            throw new Error(`Failed to fetch user with ID ${userId}`);
            }

            const data = await response.json();
            setUser(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchUser();
    }, [userId, token]);

    return { user, loading, error };
}

export default useUser;

