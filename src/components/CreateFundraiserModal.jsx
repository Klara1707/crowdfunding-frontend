
import React, { useState } from "react";
import "./CreateFundraiserModal.css";
import { useAuth } from "/src/hooks/use-auth.js";
import pointyImage from "../components/pointy.jpg";
import spikyImage from "../components/spiky.jpg";
import turboImage from "../components/turbo.jpg";
import lemmonImage from "../components/lemmon.jpg";
import miniImage from "../components/jack.jpg";

function CreateFundraiserModal({ onClose, onCreated }) {
    const { auth } = useAuth();
    const token = auth?.token;
    const today = new Date().toISOString().split("T")[0];
    const ownerName = auth?.user?.name || "Unknown User";

    const crabOptions = [
        { name: "pointy", label: "Pointy", image: pointyImage },
        { name: "spiky", label: "Spiky", image: spikyImage },
        { name: "turbo", label: "Turbo", image: turboImage },
        { name: "lemmon", label: "Lemmon", image: lemmonImage },
        { name: "mini", label: "Mini", image: miniImage },
    ];

    const [selectedCrab, setSelectedCrab] = useState(crabOptions[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const fundraiser = {
            title: formData.get("title"),
            description: formData.get("description"),
            goal: parseFloat(formData.get("goal")),
            owner: ownerName,
            date_created: today,
            is_open: formData.get("is_open") === "on",
            crab: {
                name: selectedCrab.name,
                image: selectedCrab.image,
            },
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/fundraisers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(fundraiser),
            });

            if (!response.ok) {
                throw new Error("Failed to create fundraiser");
            }


const createdFundraiser = await response.json();
if (onCreated) onCreated(createdFundraiser); // Pass the new fundraiser up

            onClose(); // Close modal
        } catch (error) {
            console.error("Error creating fundraiser:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="fundraiser-modal-overlay">
            <div className="fundraiser-modal-content">
                <h2>Create a New Fundraiser</h2>

                {/* Crab Image + Info + Dropdown */}
                <div className="fundraiser-crab-section">
                    <img
                        src={selectedCrab.image}
                        alt={selectedCrab.name}
                        className="fundraiser-preview-image"
                    />
                    <div className="fundraiser-crab-info">
                        <div className="fundraiser-name">{selectedCrab.label}</div>
                        <div className="fundraiser-subtext">Selected Crab Friend</div>
                        <label>
                            Crab:
                            <select
                                name="crab"
                                value={selectedCrab.name}
                                onChange={(e) => {
                                    const crab = crabOptions.find(c => c.name === e.target.value);
                                    setSelectedCrab(crab);
                                }}
                            >
                                {crabOptions.map((crab) => (
                                    <option key={crab.name} value={crab.name}>
                                        {crab.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" required />
                    </label>
                    <label>
                        Target Amount:
                        <input type="number" name="goal" required />
                    </label>
                    <label>
                        Owner:
                        <input type="text" name="owner" value={ownerName} readOnly />
                    </label>
                    <label>
                        Date Created:
                        <input type="date" name="date_created" value={today} readOnly />
                    </label>
                    <label>
                        Open to Supporters:
                        <input type="checkbox" name="is_open" defaultChecked />
                    </label>

                    <button type="submit">Create</button>
                    <button type="button" className="cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateFundraiserModal;
