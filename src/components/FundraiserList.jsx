
import React, { useEffect, useState } from "react";
import FundraiserCard from "./FundraiserCard";
import CreateFundraiserModal from "./CreateFundraiserModal";
import { useAuth } from "../hooks/use-auth";

function FundraiserList() {
    const { auth } = useAuth();
    const [fundraisers, setFundraisers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const fetchFundraisers = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/fundraisers`, {
            headers: {
                Authorization: `Bearer ${auth?.token}`,
            },
        });
        const data = await response.json();
        setFundraisers(data);
    };

    useEffect(() => {
        fetchFundraisers();
    }, []);

    return (
        <div className="fundraiser-list-page">
            <h1>All Fundraisers</h1>
            <button onClick={() => setShowModal(true)}>Create New Fundraiser</button>

            {showModal && (
                <CreateFundraiserModal
                    onClose={() => setShowModal(false)}
                    onCreated={fetchFundraisers} // ✅ refresh list after creation
                />
            )}

            <div className="fundraiser-list">
                {fundraisers.map(f => (
                    <FundraiserCard key={f.id} fundraiserData={f} />
                ))}
            </div>
        </div>
    );
}

export default FundraiserList;
