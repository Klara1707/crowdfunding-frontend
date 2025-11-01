
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactFormPop from "./ContactFormPop";
import LoginForm from "./LoginForm";
import UserForm from "../pages/UserForm";
import "./NavBar.css";
import { useAuth } from "/src/hooks/use-auth.js";
import CreateFundraiserModal from "../components/CreateFundraiserModal";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showUserForm, setShowUserForm] = useState(false);
    const [showCreateFundraiserModal, setShowCreateFundraiserModal] = useState(false);

    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openContactForm = () => setShowContactForm(true);
    const closeContactForm = () => setShowContactForm(false);

    const openLoginForm = () => setShowLoginForm(true);
    const closeLoginForm = () => {
        setShowLoginForm(false);
        const token = window.localStorage.getItem("token");
        if (token) {
            setAuth({ token });
        }
    };

    const openUserForm = () => setShowUserForm(true);
    const closeUserForm = () => setShowUserForm(false);

    const openCreateFundraiserModal = () => setShowCreateFundraiserModal(true);
    const closeCreateFundraiserModal = () => setShowCreateFundraiserModal(false);

    return (
        <>
            <nav className="nav-bar">
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" className="nav-button">Home</Link>
                    <button className="nav-button" onClick={openUserForm}>Create User</button>

                    {auth.token && (
                        <button className="nav-button" onClick={openCreateFundraiserModal}>
                            Create Fundraiser
                        </button>
                    )}

                    {!auth.token ? (
                        <button className="nav-button" onClick={openLoginForm}>Login</button>
                    ) : (
                        <button className="nav-button" onClick={handleLogout}>Log Out</button>
                    )}

                    <button className="nav-button" onClick={openContactForm}>Contact</button>
                </div>
            </nav>

            {showContactForm && <ContactFormPop onClose={closeContactForm} />}
            {showLoginForm && <LoginForm onClose={closeLoginForm} />}
            {showUserForm && <UserForm onClose={closeUserForm} />}
            {showCreateFundraiserModal && <CreateFundraiserModal onClose={closeCreateFundraiserModal} />}
        </>
    );
}

export default NavBar;









