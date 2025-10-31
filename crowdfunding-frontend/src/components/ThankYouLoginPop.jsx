
import React from "react";
import "./ThankYouLoginPop.css";

function ThankYouLoginPop({ onClose }) {
    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <h2>Thank You!</h2>
            <p>
            Thank you for becoming part of the Happy Crab Initiative. Your account
            has been successfully created.
            </p>
            <button onClick={onClose}>Close</button>
        </div>
        </div>
    );
    }

export default ThankYouLoginPop;

