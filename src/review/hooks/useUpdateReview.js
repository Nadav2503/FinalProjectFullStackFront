import { useState, useCallback } from "react";
import { updateReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useUpdateReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();

    const handleUpdate = useCallback(async (id, updatedData) => {
        setLoading(true);
        try {
            const response = await updateReview(id, updatedData); // API call
            setSnack("success", "Review updated successfully!");
            return response;
        } catch (err) {
            setSnack("error", `Failed to update review: ${err.message}`);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleUpdate, loading };
};

export default useUpdateReview;
