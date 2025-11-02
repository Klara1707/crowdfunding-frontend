
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./FundraiserCard.css";

function FundraiserCard({ fundraiserData }) {
    const { auth } = useAuth();
    console.log("Auth token:", auth?.token);

    const fundraiserLink = `/fundraiser/${fundraiserData.id ?? ""}`;
    const imageSrc = fundraiserData.image || "https://placehold.co/300x200?text=No+Image";

    return (
        <div className="fundraiser-card">
        <div className="card-header">
            <div className="hero-image">
            <Link to={fundraiserLink}>
                <img
                src={imageSrc}
                alt={fundraiserData.title || "Fundraiser Image"}
                className="card-image"
                />
            </Link>
            </div>
            <div className="card-content">
            <h2>{fundraiserData.title}</h2>
            <p>{fundraiserData.description}</p>
            </div>
        </div>
        </div>
    );
}

export default FundraiserCard;

