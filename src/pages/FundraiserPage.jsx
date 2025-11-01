
import { useParams } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";

function FundraiserPage() {
    const { id } = useParams();
    const { fundraiser, isLoading, error } = useFundraiser(id);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="fundraiser-page">
            <h2>{fundraiser.title}</h2>
            <h3>Created at: {new Date(fundraiser.date_created).toLocaleDateString()}</h3>
            <h3>Status: {fundraiser.is_open ? "Open to Supporters" : "Closed"}</h3>
            <h3>Owner: {fundraiser.owner?.name ?? "Unknown"}</h3>
            <p>{fundraiser.description}</p>

            {/* Crab Image Section */}
            {fundraiser.crab?.image && (
                <div className="fundraiser-crab-display">
                    <img
                        src={fundraiser.crab.image}
                        alt={`Crab: ${fundraiser.crab.name}`}
                        style={{ maxWidth: "300px", height: "auto", borderRadius: "8px" }}
                    />
                    <p><strong>Crab Friend:</strong> {fundraiser.crab.name}</p>
                </div>
            )}

            <h3>Target Amount: ${fundraiser.goal}</h3>

            <h3>Pledges:</h3>
            <ul>
                {fundraiser.pledges?.length > 0 ? (
                    fundraiser.pledges.map((pledgeData, index) => (
                        <li key={index}>
                            ${pledgeData.amount} from {pledgeData.owner?.name ?? "Anonymous"}
                        </li>
                    ))
                ) : (
                    <li>No pledges yet.</li>
                )}
            </ul>
        </div>
    );
}

export default FundraiserPage;

