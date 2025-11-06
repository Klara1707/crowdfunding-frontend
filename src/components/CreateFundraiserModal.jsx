
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateFundraiserModal.css";
import { useAuth } from "../hooks/use-auth.js";
import pointyImage from "../components/pointy.jpg";
import spikyImage from "../components/spiky.jpg";
import turboImage from "../components/turbo.jpg";
import lemmonImage from "../components/lemmon.jpg";
import miniImage from "../components/jack.jpg";
import postFundraiser from "../api/post-fundraiser.js";


function getBase64FromImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imgPath;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL("image/jpeg")); // or "image/png"
        };

        img.onerror = reject;
    });
}


function CreateFundraiserModal({ onClose, onCreated }) {
    const { auth } = useAuth();
    const token = auth?.token;
    const navigate = useNavigate();


        const crabOptions = [
        { name: "pointy", label: "Pointy", image: "https://klara1707.github.io/crab-images/" },
        { name: "spiky", label: "Spiky", image: "https://klara1707.github.io/crab-images/" },
        { name: "turbo", label: "Turbo", image: "https://klara1707.github.io/crab-images/" },
        { name: "lemmon", label: "Lemmon", image: "https://klara1707.github.io/crab-images/" },
        { name: "mini", label: "Mini", image: "https://klara1707.github.io/crab-images/" },
        ];


    const [fundraiser, setFundraiser] = useState({
        title: "",
        description: "",
        goal: "",
        crab: crabOptions[0],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFundraiser((prevFundraiser) => ({
            ...prevFundraiser,
            [name]: name === "goal" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (fundraiser.title && fundraiser.description && fundraiser.goal && fundraiser.crab?.image) {
            try {
                const imageUrl = fundraiser.crab.image;


const payload = {
    title: fundraiser.title,
    description: fundraiser.description,
    goal: fundraiser.goal,
    image: imageUrl, // ✅ Send image URL
    is_open: true,
    token,
};


                await postFundraiser(payload);
                onCreated?.();
                navigate("/");
                onClose();
            } 
            catch (error) {
    console.error("fundraiser fail:", error.message || error);
    alert("Fundraiser creation failed. Check console for details.");
}

        } else {
            alert("Missing required fields or crab image.");
        }
    };

    return (
        <div className="fundraiser-modal-overlay">
            <div className="fundraiser-modal-content">
                <h2>Create a New Fundraiser</h2>

                {/* Crab Image + Dropdown */}
                <div className="fundraiser-crab-section">
                    <img
                        src={fundraiser.crab.image}
                        alt={fundraiser.crab.name}
                        className="fundraiser-preview-image"
                    />
                    <div className="fundraiser-crab-info">
                        <div className="fundraiser-name">{fundraiser.crab.label}</div>
                        <div className="fundraiser-subtext">Selected Crab Friend</div>
                        <label>
                            Crab:
                            <select
                                name="crab"
                                value={fundraiser.crab.name}
                                onChange={(e) => {
                                    const crab = crabOptions.find(c => c.name === e.target.value);
                                    setFundraiser((prevFundraiser) => ({ ...prevFundraiser, crab }));
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
                        <input type="text" name="title" required onChange={handleChange} />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" required onChange={handleChange} />
                    </label>
                    <label>
                        Target Amount:
                        <input type="number" name="goal" required onChange={handleChange} />
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
