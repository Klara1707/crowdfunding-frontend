
import React from "react";
import "./CameraPop.css";
import CrabTakeOver from './CrabTakeOver';

function CameraPop({ card, onClose, onCrabTakeOver }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCrabTakeOver) onCrabTakeOver();
    if (onClose) onClose();
  };

  return (
    <div className="camera-popup-overlay">
      <div className="camera-popup-content">
        <h2>Pledge to {card.name}</h2>
        <p>{card.description}</p>
        <p><strong>Goal:</strong> ${card.goal || "100"}</p>

        <form onSubmit={handleSubmit}>
          <label>
            Pledge Amount:
            <input type="number" min="1" placeholder="$" required />
          </label>
          <button type="submit">Submit Pledge</button>
        </form>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CameraPop;






