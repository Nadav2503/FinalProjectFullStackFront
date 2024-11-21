import { useCallback, useState } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useDeleteExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleDeleteExhibit = useCallback(async (id) => {

    }, [setSnack]);

    return { isLoading, error, handleDeleteExhibit };
}
