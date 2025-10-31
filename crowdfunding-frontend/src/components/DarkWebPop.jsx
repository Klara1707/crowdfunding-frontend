
import React, { useEffect, useState } from "react";
import "./DarkWebPop.css";

function DarkWebPop({ onClose }) {
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
        <div className="DarkWeb-popup-overlay">
            <div className="DarkWeb-popup-content">
                <h2>🦀 CRABDOMINATION PORTAL // NODE: OBSIDIAN-13</h2>
                <p>
                    <strong>⚠️ WARNING:</strong> Unauthorized access will trigger <em>shellshock protocols</em>.<br />
                    This node is monitored by the <strong>Crustacean Intelligence Core</strong>.<br /><br />

                    <strong>Biometric Authentication Required:</strong><br />
                    <em>Initiating facial scan...</em><br />
                    
                    <div className="scan-code">
                    <span className="bracket">[</span>
                    <span className="scan-blocks">
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                        <span className="block"></span>
                    </span>
                    <span className="bracket">]</span>
                    </div>


                    ✅ Identity Match: <strong>Surface Sympathizer #442</strong><br />
                    🧠 Neural Compliance: <strong>Pending</strong><br />
                    🐚 Shell Compatibility: <strong>Unstable</strong><br /><br />

                    <strong>DO NOT PROCEED</strong> unless you are prepared to abandon your terrestrial loyalties.<br />
                    This portal is a one-way tide. Once submerged, you cannot return.<br /><br />
                    Their silence is not peace. It is planning.<br /><br />

                    <strong>Crab Signal Detected:</strong> <code>Ω-CRB-VOID-77</code><br />
                    <em>(Decoding this will void your surface clearance.)</em><br /><br />

                    🕳️ <strong>Self Destruction in:</strong> {formatTime(timeLeft)}<br />
                    🦀 <strong>Crab Ascension Protocols Engaged</strong><br /><br />

                    <strong>FINAL WARNING:</strong><br />
                    This portal is not a game.<br />
                    This is not a simulation.<br />
                    This is not a drill.<br /><br />

                    <strong>TURN BACK NOW.</strong><br />
                    Or choose your shell... and embrace the tide.
                </p>

                <p className="warning-text">⚠️ FINAL WARNING: TURN BACK NOW ⚠️</p>


                <button type="button" onClick={onClose}>Close</button>

            </div>
        </div>
    );
}

export default DarkWebPop;

