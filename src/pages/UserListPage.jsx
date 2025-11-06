
import React, { useState, useEffect } from "react";
import useUsers from "../hooks/use-users";
import UserForm from "../components/UserForm";
import { useAuth } from "../hooks/use-auth"; // ✅ Corrected path

function UserListPage() {
    const [showForm, setShowForm] = useState(false);
    const { auth } = useAuth(); // Get token from context
    const token = auth?.token;

    const {
        users,
        loading,
        error,
        fetchUsers,
        createUser
    } = useUsers(token); // Pass token to hook

    // ✅ Optional: fetch users on mount
    useEffect(() => {
        fetchUsers();
    }, []);

    // ✅ Handle user creation
    const handleUserCreated = async (userData) => {
        try {
            const newUser = await createUser(userData);
            console.log("User created:", newUser);
            await fetchUsers(); // Refresh list
            setShowForm(false); // Close form
        } catch (err) {
            console.error("Error creating user:", err);
            alert("Failed to create user.");
        }
    };

    return (
        <div className="user-list-page">
            <h1>User List</h1>

            <button onClick={() => setShowForm(true)}>Create New User</button>

            {showForm && (
                <UserForm
                    onClose={() => setShowForm(false)}
                    onCreated={handleUserCreated}
                />
            )}

            {loading && <p>Loading users...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserListPage;
