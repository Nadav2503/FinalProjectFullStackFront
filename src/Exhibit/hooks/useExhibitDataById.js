import { useCallback, useState } from 'react';
import { getExhibitById } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useExhibitById() {
    const [exhibit, setExhibit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    console.log("useExhibitById hook initialized");

    const fetchExhibitById = useCallback(async (id) => {
        console.log("Fetching exhibit with ID:", id);
        setIsLoading(true);
        setError(null);
        try {
            const data = await getExhibitById(id);
            setExhibit(data);
            setSnack('success', `Exhibit ${id} fetched successfully!`);
            console.log("Fetched exhibit data:", data);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to fetch exhibit ${id}`);
            console.error("Fetch error:", err);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { exhibit, error, isLoading, fetchExhibitById };
}