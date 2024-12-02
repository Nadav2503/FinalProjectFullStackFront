import { useState, useCallback } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useGetUserById() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setSnack = useSnack();


    return { user, loading, error, };
}
