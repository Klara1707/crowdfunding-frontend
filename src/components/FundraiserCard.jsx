
import { Link } from "react-router-dom";
import "./FundraiserCard.css";
import pointyImage from "../components/pointy.jpg";
import spikyImage from "../components/spiky.jpg";
import turboImage from "../components/turbo.jpg";
import lemmonImage from "../components/lemmon.jpg";
import miniImage from "../components/jack.jpg";

function FundraiserCard({ fundraiserData }) {
    const fundraiserLink = `/fundraiser/${fundraiserData.id ?? ""}`;
    const imageSrc = fundraiserData.crab?.image || "https://placehold.co/300x200?text=No+Image";

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

            <div className="card-progress">
                Raised ${fundraiserData.amountRaised ?? 0} of ${fundraiserData.goal}
            </div>

            <div className="card-actions">
                <button>Donate</button>
            </div>
        </div>
    );
}

export default FundraiserCard;




