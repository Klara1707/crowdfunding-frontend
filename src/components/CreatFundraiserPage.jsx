
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateFundraiserPage() {
    const navigate = useNavigate(); // ✅ move this inside the component

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = window.localStorage.getItem("token");

        const response = await fetch(`${import.meta.env.VITE_API_URL}/fundraisers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // or Token if your API expects it
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Fundraiser created successfully!");
            navigate("/fundraisers"); // ✅ redirect to list
        } else {
            alert("Failed to create fundraiser.");
        }
    };

    return (
        <div>
            <h2>Create a New Fundraiser</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Goal Amount:
                    <input type="number" name="goal" value={formData.goal} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="url" name="image" value={formData.image} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Open for Pledges:
                    <input type="checkbox" name="is_open" checked={formData.is_open} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Create Fundraiser</button>
            </form>
        </div>
    );
}

export default CreateFundraiserPage;

