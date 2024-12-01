import { useCallback, useState } from 'react';
import { updateAnimalsInExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useUpdateAnimalsInExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateAnimals = useCallback(async (id, animalId) => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await updateAnimalsInExhibit(id, { animalId });

            const animalAdded = data.animals.includes(animalId);
            if (animalAdded) {
                setSnack('success', 'Animal successfully added to the exhibit!');
            } else {
                setSnack('success', 'Animal successfully removed from the exhibit!');
            }

            return data; // Return the updated exhibit
        } catch (err) {
            setError(err.message);
            setSnack('error', 'Failed to update exhibit animals.');
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { isLoading, error, handleUpdateAnimals };
}
