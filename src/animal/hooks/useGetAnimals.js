import { useState, useEffect } from "react";
import { getAnimals } from "../../services/AnimalServiceApi";

const useGetAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const data = await getAnimals();
                setAnimals(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimals();
    }, []);

    return { animals, loading, error };
};

export default useGetAnimals;
