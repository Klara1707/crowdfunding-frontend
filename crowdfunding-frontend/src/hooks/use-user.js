
import { useState, useEffect } from "react";

function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch users from API
    const fetchUsers = async () => {
        setLoading(true);
        try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/`);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    // Create a new user
    const createUser = async (userData) => {
        try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        const newUser = await response.json();
        setUsers((prev) => [...prev, newUser]);
        } catch (err) {
        setError(err.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users,
        loading,
        error,
        fetchUsers,
        createUser,
    };
}

export default useUsers;
