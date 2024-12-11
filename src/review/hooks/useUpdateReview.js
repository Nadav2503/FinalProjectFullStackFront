import { useState, useCallback } from "react";
import { updateReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeReview from "../helpers/normalizeReview";

const useUpdateReview = () => {
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const handleUpdate = useCallback(async (id, updatedData) => {
        setLoading(true);
        setError(null);
        try {
            const normalizedReview = normalizeReview(updatedData);
            const updatedReview = await updateReview(id, normalizedReview); // API call
            setReview(updatedReview);
            setSnack("success", "Review updated successfully!");

        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to update review: ${err.message}`);

        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleUpdate, loading, review, error };
};

export default useUpdateReview;
