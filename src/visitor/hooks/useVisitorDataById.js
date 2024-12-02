import { useState, useCallback } from 'react';
import { getVisitorById } from '../../services/VisitorServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useGetUserById() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchUserById = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getVisitorById(id); // Call your API service to fetch user data by ID
            setUser(data); // Set the fetched user data
            setSnack('success', `User ${id} fetched successfully!`); // Optionally show a success message
        } catch (err) {
            setError(err.message); // Set the error if any occurs
            setSnack('error', `Failed to fetch user ${id}`); // Optionally show an error message
        } finally {
            setLoading(false); // Stop loading
        }
    }, [setSnack]);

    return { user, loading, error, fetchUserById };
}
