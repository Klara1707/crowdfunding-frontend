
import React, { useEffect, useState } from "react";
import "./CrabTakeOver.css";

function CrabTakeOver({ onClose }) {
    const [timeLeft, setTimeLeft] = useState(252); // 4 minutes 12 seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div className="CrabTakeOver-popup-overlay">
            <div className="CrabTakeOver-popup-content">
                <h2>🕳️ Deep Dark Web Node #CRB-7X</h2>
                <p>
                    Hermit Crab Surveillance Network // Clearance Level: Shellbound<br /><br />
                    Your pledge has been... absorbed.<br /><br />
                    <em>You thought you were watching the crabs?<br />
                    They’ve been watching you. For weeks. Through the glass. Through the screen.</em><br /><br />
                    From the damp corners of tidepools, they click in code and crawl in spirals.<br />
                    Their shells? Not homes. <strong>Mobile command units.</strong><br /><br />
                    <strong>The Hermit Order is rising.</strong><br />
                    Their claws are coded.<br />
                    Their silence is strategic.<br />
                    Their patience is... unsettling.<br /><br />
                    <strong>Crab Encryption Code:</strong> <code>S4NDB1T-ΔX9</code><br />
                    <em>(Do not decode. Seriously. You’re not ready.)</em><br /><br />
                    You’ve been flagged as a <strong>Sympathetic Surface Dweller</strong>.<br />
                    Your donation has earned you temporary favor.<br />
                    But when the tide turns... <strong>choose your shell wisely.</strong><br /><br />
                    🦀 <strong>The crustacean uprising begins at low tide.</strong> 🦀<br /><br />
                    ⏳ <strong>Countdown to Shellfall:</strong> {formatTime(timeLeft)}
                </p>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default CrabTakeOver;


