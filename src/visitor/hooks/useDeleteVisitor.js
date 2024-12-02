import { useCallback, useState } from 'react';
import { deleteVisitor } from '../../services/VisitorServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';
import { getToken } from '../../services/LocalStorageService';

const useDeleteVisitor = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleDeleteVisitor = useCallback(async (id) => {
        setLoading(true);
        setError(null);

        const token = getToken(); // Get the token from localStorage

        try {
            await deleteVisitor(id, token); // Pass the token to the delete API
            setSnack('success', `Visitor ${id} deleted successfully!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to delete visitor ${id}`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleDeleteVisitor, loading, error };
};

export default useDeleteVisitor;
