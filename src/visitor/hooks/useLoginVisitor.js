import { useState, useCallback } from 'react';
import { loginVisitor } from '../../services/VisitorServiceApi';
import { setTokenInLocalStorage } from '../../services/LocalStorageService';
import { useSnack } from '../../providers/SnackbarProvider';
import { useCurrentVisitor } from '../../providers/VisitorProvider';

export default function useLoginVisitor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const { setVisitor, setToken } = useCurrentVisitor();

    const handleLogin = useCallback(async (userLogin) => {
        setIsLoading(true);
        setError(null);  // Clear previous error if any

        try {
            // Try to login the user and retrieve the visitor data and token
            const { token, visitorData } = await loginVisitor(userLogin);  // Adjust API call response accordingly

            // Store token in local storage and set the token in the state
            setTokenInLocalStorage(token);
            setToken(token);

            // Set the visitor data in context/state
            setVisitor(visitorData);

            // Successfully logged in, show success message
            setSnack('success', 'Login successful!');
        } catch (err) {
            setError(err.message);  // Set error if fetching fails
            setSnack('error', "Failed to Login");  // Show error message
        } finally {
            setIsLoading(false);
        }
    }, [setSnack, setToken, setVisitor]);

    return {
        isLoading,
        error,
        handleLogin,
    };
}
