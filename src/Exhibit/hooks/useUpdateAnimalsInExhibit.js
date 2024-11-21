import { useCallback } from 'react';
import { updateAnimalsInExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useUpdateAnimalsInExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateAnimals = useCallback(async (id, animals) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await updateAnimalsInExhibit(id, animals);
            setSnack('success', 'Animals updated in the exhibit successfully!');
            return data; // Optionally return the updated exhibit with animals
        } catch (err) {
            setError(err.message);
            setSnack('error', 'Failed to update animals in the exhibit');
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { isLoading, error, handleUpdateAnimals };
}
