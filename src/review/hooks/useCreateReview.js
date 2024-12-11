import { useState, useCallback } from "react";
import { createReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useCreateReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();

    const handleCreate = useCallback(async (reviewData) => {
        setLoading(true);
        try {
            const response = await createReview(reviewData); // API call
            setSnack("success", "Review created successfully!");
            return response;
        } catch (err) {
            setSnack("error", `Failed to create review: ${err.message}`);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleCreate, loading };
};

export default useCreateReview;
