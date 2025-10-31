
import React from "react";
import "./CameraPop.css";
import "./CrabTakeOver.jsx";

function CameraPop({ card, onClose, onCrabTakeover }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onCrabTakeover) onCrabTakeover();
        if (onClose) onClose();
    };

    return (
        <div className="camera-popup-overlay">
            <div className="camera-popup-content">
                <h2>Pledge to {card.title}</h2>
                <p>{card.description}</p>
                <p><strong>Goal:</strong> ${card.goal}</p>


                <form onSubmit={handleSubmit}>
                    <label>
                        Pledge Amount:
                        <input type="number" min="1" placeholder="$" />
                    </label>
                    <button type="submit">Submit Pledge</button>
                </form>

                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default CameraPop;






