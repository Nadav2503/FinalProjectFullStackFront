import { useCallback, useState } from 'react';
import { createExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useCreateExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleCreateExhibit = useCallback(async (exhibitFromClient) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await createExhibit(exhibitFromClient);
            setSnack('success', 'Exhibit created successfully!');
            return data;
        } catch (err) {
            setError(err.message);
            setSnack('error', 'Failed to create exhibit');
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { isLoading, error, handleCreateExhibit };
}
