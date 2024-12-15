import { useState, useCallback } from "react";
import { likeReview } from "../../services/ReviewServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useLikeReview = () => {
    const [loading, setLoading] = useState(false);
    const [likedReviews, setLikedReviews] = useState([]);
    const setSnack = useSnack();

    const handleLike = useCallback(async (id) => {
        setLoading(true);
        try {
            await likeReview(id); // API call
            const newLikedReviews = likedReviews.includes(reviewId)
                ? likedReviews.filter((id) => id !== reviewId)
                : [...likedReviews, reviewId];

            setLikedReviews(newLikedReviews);
            setSnack("success", "Review like/unlike successful!");
        } catch (err) {
            setSnack("error", `Failed to like/unlike review: ${err.message}`);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [setSnack]);

    return { handleLike, loading };
};

export default useLikeReview;
