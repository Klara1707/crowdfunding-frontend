
// src/api/post-users.js
async function postUsers(userData) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        });

        if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error details:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("User creation failed:", error);
        throw error;
    }
    }

export default postUsers;
