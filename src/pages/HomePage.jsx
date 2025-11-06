
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import DarkWebPop from "../components/DarkWebPop";
import "./HomePage.css";
import useFundraisers from "../hooks/use-fundraisers";
import PersonalCards from "../components/PersonalCards";
import FundraiserCard from "../components/FundraiserCard";
import CreateFundraiserModal from "../components/CreateFundraiserModal";
import spikyImage from "../components/spiky.jpg";

function HomePage() {
    const { fundraisers, fetchFundraisers } = useFundraisers(); // ✅ Ensure fetchFundraisers is exposed
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showDarkWebPop, setShowDarkWebPop] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        console.log("Fetched fundraisers:", fundraisers);
    }, [fundraisers]);

    const handleHeroClick = () => {
        setShowDarkWebPop(true);
    };


const handleFundraiserCreated = async (newFundraiser) => {
    console.log("New fundraiser created:", newFundraiser); // ✅ Add this line
    if (newFundraiser && newFundraiser.id) {
       await fetchFundraisers(); // ✅ Re-fetch from backend
    }
};


    const crabCards = [
        // Add crabCards data here if needed
    ];
const allFundraisers = [...crabCards, ...fundraisers]; // ✅ Simplified for testing

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

            {/* Combined Cards Layout */}
            <div className="cards-wrapper">
                <div className="personal-cards-container">
                    <PersonalCards />
                </div>

                <div className="fundraiser-cards-container">
                    {allFundraisers.map((fundraiserData) => (
                        <FundraiserCard key={fundraiserData.id} fundraiserData={fundraiserData} />
                    ))}
                </div>
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

            {showDarkWebPop && <DarkWebPop onClose={() => setShowDarkWebPop(false)} />}

            {showModal && (
                <CreateFundraiserModal
                    onClose={() => setShowModal(false)}
                    onCreated={handleFundraiserCreated}
                />
            )}
        </>
    );
}

export default HomePage;
