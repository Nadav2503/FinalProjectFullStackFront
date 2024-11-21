import { useCallback, useState } from 'react';
import { updateExhibit } from '../../services/ExhibitServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useUpdateExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateExhibit = useCallback(async (id, exhibitFromClient) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await updateExhibit(id, exhibitFromClient);
            setSnack('success', `Exhibit ${id} updated successfully!`);
            return data;
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to update exhibit ${id}`);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { isLoading, error, handleUpdateExhibit };
}
