import { useState, useCallback } from "react";
import { getAnimals } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useGetAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchAnimals = useCallback(async () => {
        try {
            const data = await getAnimals();
            setAnimals(data);
            setSnack('success', 'Animals loaded successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);


    return { animals, loading, error, fetchAnimals };
};

export default useGetAnimals;
