
import { useState, useEffect } from "react";
import getFundraisers from "../api/get-fundraisers";

export default function useFundraisers() {
    const [fundraisers, setFundraisers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchFundraisers = () => {
        setIsLoading(true);
        getFundraisers()
            .then((fundraisers) => {
                setFundraisers(fundraisers);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchFundraisers();
    }, []);

    return { fundraisers, isLoading, error, setFundraisers };
}

