import { useState, useEffect } from "react";
import { getAnimalsByExhibit } from "../../services/AnimalServiceApi";

const useGetAnimalsByExhibit = (exhibitId) => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!exhibitId) return;

        const fetchAnimals = async () => {
            try {
                const data = await getAnimalsByExhibit(exhibitId);
                setAnimals(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimals();
    }, [exhibitId]);

    return { animals, loading, error };
};

export default useGetAnimalsByExhibit;
