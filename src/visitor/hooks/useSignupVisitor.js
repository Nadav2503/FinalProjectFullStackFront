import { useState, useCallback } from 'react';
import { registerVisitor, loginVisitor } from '../../services/VisitorServiceApi';
import { getUser, setTokenInLocalStorage } from '../../services/LocalStorageService';
import { useSnack } from '../../providers/SnackbarProvider';
import { useCurrentVisitor } from '../../providers/VisitorProvider';
import normalizeProfileForSignup from '../helpers/normalize/normalizeProfileForSignup';

export default function useSignupVisitor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const { setVisitor, setToken } = useCurrentVisitor();

    const handleSignup = useCallback(async (visitor) => {
        setIsLoading(true);
        setError(null);  // Clear any previous errors

        try {
            const normalizedVisitor = normalizeProfileForSignup(visitor);
            await registerVisitor(normalizedVisitor);

            // Now login the user with the credentials (email & password)
            const credentials = { email: normalizedVisitor.email, password: normalizedVisitor.password };
            const { token } = await loginVisitor(credentials);

            // Set token in local storage and state
            setTokenInLocalStorage(token);
            setToken(token);

            // Set visitor data in the context/state
            setVisitor(getUser());

            setSnack('success', 'Signup and login successful!');
        } catch (err) {
            setError(err.message);
            setSnack('error', "Signup or login failed");
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