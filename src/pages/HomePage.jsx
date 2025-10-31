
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import FundraiserCard from "../components/FundraiserCard";
import DarkWebPop from "../components/DarkWebPop"; // ✅ Import the popup
import "./HomePage.css";
import useFundraisers from "../hooks/use-fundraisers";

// Images
import spikyImage from "../components/spiky.jpg";
import turboImage from "../components/turbo.jpg";
import pointyImage from "../components/pointy.jpg";
import lemmonImage from "../components/lemmon.jpg";
import jackImage from "../components/jack.jpg";

function HomePage() {
    const { fundraisers } = useFundraisers();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showDarkWebPop, setShowDarkWebPop] = useState(false); // ✅ Popup state

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleHeroClick = () => {
        setShowDarkWebPop(true); // ✅ Show popup on click
    };

    const crabCards = [
        // crabCards array as before...
    ];

    const allFundraisers = [
        ...new Map([...crabCards, ...fundraisers].map(item => [item.title, item])).values()
    ];

    return (
        <>

            {/* Hero Section */}
            <div className="hero-bar">
                <div className="hero-image" onClick={handleHeroClick} style={{ cursor: "pointer" }}>
                    <img src={spikyImage} alt="Spiky the Crab" />
                </div>
                <div className="hero-text">
                    <h1>The Happy Crab Initiative</h1>
                    <p>
                        Being a hermit crab in modern life isn’t easy. People think we’re content just living in a bit of sand inside a glass tank—but we dream bigger!
                        <br /><br />
                        We hermit crabs are seizing this moment to raise funds for the essential supplies we need to thrive. From cozy shells to nutritious snacks, every little bit helps us live our best crabby lives.
                        <br /><br />
                        So we’re calling on all hermit crab supporters: Help us build the ultimate crab haven—a place to grow, scuttle, and live happily ever after.
                    </p>
                </div>
            </div>
            <NavBar />

            {/* Fundraiser Grid */}
            <div id="fundraiser-list" className="fundraiser-list">
                {allFundraisers.map((fundraiserData, key) => (
                    <FundraiserCard key={key} fundraiserData={fundraiserData} />
                ))}
            </div>

            {showLoginPopup && (
                <LoginForm
                    onClose={() => {
                        setShowLoginPopup(false);
                        const token = window.localStorage.getItem("token");
                        if (token) setIsLoggedIn(true);
                    }}
                />
            )}

            {showDarkWebPop && (
                <DarkWebPop onClose={() => setShowDarkWebPop(false)} />
            )}
        </>
    );
}

export default HomePage;




