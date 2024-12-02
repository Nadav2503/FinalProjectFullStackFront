import { useState, useCallback } from 'react';
import { signupVisitor } from '../../services/VisitorServiceApi';
import { setTokenInLocalStorage } from '../../services/LocalStorageService';
import { useSnack } from '../../providers/SnackbarProvider';
import { useCurrentVisitor } from '../../providers/VisitorProvider';
import normalizeProfile from '../helpers/normalize/normalizeProfile';

export default function useSignupVisitor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const { setVisitor, setToken } = useCurrentVisitor();

    const handleSignup = useCallback(async (visitor) => {
        setIsLoading(true);
        setError(null);  // Clear any previous errors

        try {
            // Normalize user data if needed (e.g., formatting or sanitizing inputs)
            const normalizedVisitor = normalizeProfile(visitor);

            // Call the signup API
            const { token, visitorData } = await signupVisitor(normalizedVisitor);

            // Store token in localStorage and set token in state
            setTokenInLocalStorage(token);
            setToken(token);

            // Set the visitor data in context/state
            setVisitor(visitorData);

            // Successfully signed up, show success message
            setSnack('success', 'Signup successful!');

        } catch (err) {
            setError(err.message);  // Set error if signup fails
            setSnack('error', "Failed to Signup");  // Show error notification
        } finally {
            setIsLoading(false);
        }
    }, [setSnack, setToken, setVisitor]);

    return {
        isLoading,
        error,
        handleSignup,
    };
}
