import { useState, useCallback } from 'react';
import { updateVisitorProfile } from '../../services/VisitorServiceApi';
import { useSnack } from '../../providers/SnackbarProvider';
import normalizeEditProfile from '../../helpers/normalizeEditProfile';

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

            // Call the update API to update the profile
            const updatedVisitor = await updateVisitorProfile(id, normalizedProfile);

            // Update visitor state after successful update
            setVisitor(updatedVisitor);
            setSnack('success', 'Profile updated successfully!');  // Show success message
        } catch (err) {
            // Handle errors during the update process
            const errorMessage = err.response?.data?.message || err.message || 'Failed to update profile';
            setError(errorMessage);  // Store error message
            setSnack('error', errorMessage);  // Show error notification
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { visitor, isLoading, error, handleUpdateProfile };
}
