

async function postUser({ username, password, email, first_name, last_name }) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                email,
                first_name,
                last_name
            }),
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            console.error("Server error details:", errorDetails);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("User creation failed:", error);
        throw error;
    }
}

export default postUser;

