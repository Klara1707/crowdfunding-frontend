
// src/pages/UserListPage.jsx
import React, { useState, useEffect } from "react";
import useUsers from "../hooks/use-users";
import UserForm from "../components/UserForm";
import { useAuth } from "./hooks/use-Auth";

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

    useEffect(() => {
        if (!showForm) {
            fetchUsers();
        }
    }, [showForm]);

    return (
        <div className="user-list-page">
            <h1>User List</h1>

            {loading && <p>Loading users...</p>}
            {error && <p className="error">Error: {error}</p>}

            <button onClick={() => setShowForm(true)}>Create New User</button>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.first_name} {user.last_name} ({user.username}) - {user.email}
                    </li>
                ))}
            </ul>

            {showForm && (
                <UserForm onClose={() => setShowForm(false)} />
            )}
        </div>
    );
}

export default UserListPage;
