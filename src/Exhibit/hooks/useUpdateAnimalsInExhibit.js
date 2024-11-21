import { useCallback, useState } from 'react';
import { updateAnimalsInExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useUpdateAnimalsInExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateAnimals = useCallback(async (id, animalId, action) => {
        setIsLoading(true);
        setError(null);

        const animalAction = action === 'approve' ? { animalId } : { animalId: null };

        try {
            const data = await updateAnimalsInExhibit(id, animalAction);
            if (action === 'approve') {
                setSnack('success', 'Animal added to the exhibit!');
            } else {
                setSnack('success', 'Animal removed from the exhibit!');
            }
            return data;
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to update animal in exhibit`);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { isLoading, error, handleUpdateAnimals };
}
