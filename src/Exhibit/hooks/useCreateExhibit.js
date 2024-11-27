import { useCallback, useState } from 'react';
import { createExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';
import normalizeExhibit from '../helpers/normalizeExhibit';

export default function useCreateExhibit() {
    const [exhibit, setExhibit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    console.log("useCreateExhibit hook initialized");

    const handleCreateExhibit = useCallback(async (exhibitFromClient) => {
        console.log("Creating exhibit with data:", exhibitFromClient);
        setIsLoading(true);
        setError(null);
        try {
            const normalizedExhibit = normalizeExhibit(exhibitFromClient);
            console.log("Normalized exhibit data:", normalizedExhibit);
            const data = await createExhibit(normalizedExhibit);
            setExhibit(data);
            setSnack('success', 'Exhibit created successfully!');
        } catch (err) {
            setError(err.message);
            setSnack('error', 'Failed to create exhibit');
            console.error("Create error:", err);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { exhibit, isLoading, error, handleCreateExhibit };
}