import { useState, useCallback } from "react";
import { deleteReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useDeleteReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();

    const handleDelete = useCallback(async (id) => {
        setLoading(true);
        try {
            const response = await deleteReview(id); // API call
            setSnack("success", "Review deleted successfully!");
            return response;
        } catch (err) {
            setSnack("error", `Failed to delete review: ${err.message}`);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return {};
};

export default useDeleteReview;
