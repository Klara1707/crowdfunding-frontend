
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
        <div>
            <h2>{fundraiser.title}</h2>
            <h3>Created at: {fundraiser.date_created}</h3>
            <h3>Status: {fundraiser.is_open ? "Open" : "Closed"}</h3>
            <h3>Owner: {fundraiser.owner}</h3>
            <p>{fundraiser.description}</p>
            <img
                src={fundraiser.image}
                alt="Fundraiser"
                style={{ maxWidth: "100%", height: "auto" }}
            />
            <h3>Target Amount: ${fundraiser.goal}</h3>
            <h3>Pledges:</h3>
            <ul>
                {fundraiser.pledges.map((pledgeData, key) => (
                    <li key={key}>
                        ${pledgeData.amount} from {pledgeData.owner ?? "Anonymous"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FundraiserPage;

