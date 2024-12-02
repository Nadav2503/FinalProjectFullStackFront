import { useState, useCallback } from 'react';
import { likeAnimal } from '../../services/VisitorServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';
import { getToken } from '../../services/LocalStorageService';

const useLikeAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleLikeAnimal = useCallback(async (visitorId, animalId) => {
        setLoading(true);
        setError(null);

        const token = getToken(); // Get token from localStorage

        try {
            // Call API to toggle the like status for the animal
            await likeAnimal(visitorId, animalId, token); // Pass the token for authentication

            // Show success notification after the API call
            setSnack('success', `Animal ${animalId} like status updated!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to like animal ${animalId}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleLikeAnimal, loading, error };
};

export default useLikeAnimal;
