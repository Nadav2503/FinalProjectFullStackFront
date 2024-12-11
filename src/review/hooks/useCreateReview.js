import { useState, useCallback } from "react";
import { createReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeReview from "../helpers/normalizeReview";

const useCreateReview = () => {
    const [review, setReview] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();

    const handleCreate = useCallback(async (reviewData) => {
        setLoading(true);
        try {
            const normalizedReview = normalizeReview(reviewData)
            const data = await createReview(normalizedReview); // API call
            setReview(data)
            setSnack("success", "Review created successfully!");
        } catch (err) {
            setError(err.message);
            setSnack("error", `Failed to create review`);
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { review, handleCreate, loading, error };
};

export default useCreateReview;
