import { useState, useCallback } from 'react';
import { updateVisitorProfile } from '../../services/VisitorServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';
import normalizeEditProfile from '../helpers/normalize/normalizeEditProfile';


export default function useUpdateVisitorProfile() {
    const [visitor, setVisitor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdateProfile = useCallback(async (id, profileData) => {
        setIsLoading(true);
        setError(null);  // Clear previous errors

        try {
            // Normalize profile data before sending to the API
            const normalizedProfile = normalizeEditProfile(profileData);

            console.log("Normalized profile being sent to backend:", normalizedProfile);

            // Call the update API to update the profile
            const updatedVisitor = await updateVisitorProfile(id, normalizedProfile);

            console.log("Updated visitor data received:", updatedVisitor);  // Check updated data

            // Update visitor state after successful update
            setVisitor(updatedVisitor);
            setSnack('success', 'Profile updated successfully!');
        } catch (err) {
            setError(err.message);
            setSnack('error', 'Failed to update profile');
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);


    return { visitor, isLoading, error, handleUpdateProfile };
}
