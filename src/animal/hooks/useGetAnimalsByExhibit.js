import { useState, useCallback } from "react";
import { getAnimalsByExhibit } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useGetAnimalsByExhibit = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchAnimalsByExhibit = useCallback(async (exhibitId) => {
        if (!exhibitId) return;

        setLoading(true);
        setError(null);

        try {
            const data = await getAnimalsByExhibit(exhibitId);
            setAnimals(data);
            setSnack('success', `Successfully fetched animals for exhibit ${exhibitId}!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to fetch animals for exhibit ${exhibitId}: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { animals, loading, error, fetchAnimalsByExhibit };
};

export default useGetAnimalsByExhibit;
