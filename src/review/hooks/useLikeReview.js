import { useState, useCallback } from "react";
import { likeReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useLikeReview = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();

    const handleLike = useCallback(async (id) => {
        setLoading(true);
        try {
            const response = await likeReview(id); // API call
            setSnack("success", "Review like/unlike successful!");
            return response;
        } catch (err) {
            setSnack("error", `Failed to like/unlike review: ${err.message}`);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return {};
};

export default useLikeReview;
