async function postUser(username, password, email) {
    
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password, 
                email: email,
            }),
        });

        if (!response.ok) {
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