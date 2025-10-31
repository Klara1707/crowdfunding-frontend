
import React from "react";
import "./LemmonPop.css";

function LemmonPop({ card, onClose }) {
    return (
        <div className="lemmon-popup-overlay">
            <div className="lemmon-popup-content">
                <h2>Pledge to {card.title}</h2>
                <p>{card.description}</p>
                <p><strong>Goal:</strong> ${card.goal}</p>
                <p><strong>Raised:</strong> ${card.amountRaised}</p>

                <form>
                    <label>
                        Pledge Amount:
                        <input type="number" min="1" placeholder="$" />
                    </label>
                    <button type="submit">Submit Pledge</button>
                </form>

                <button type="button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default LemmonPop;







