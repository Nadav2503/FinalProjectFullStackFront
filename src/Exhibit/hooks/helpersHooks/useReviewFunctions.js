import { useNavigate } from "react-router-dom";
import useDeleteReview from "../../../review/hooks/useDeleteReview";
import useLikeReview from "../../../review/hooks/useLikeReview";
import ROUTES from "../../../routers/routerModel";

const useReviewFunctions = (exhibitId, fetchReviews) => {
    const navigate = useNavigate();
    const { handleDelete } = useDeleteReview();
    const { handleLike } = useLikeReview();

    const handleDeleteReview = async (reviewId) => {
        try {
            console.log("Attempting to delete review:", reviewId);
            await handleDelete(reviewId);
            console.log("Review deleted successfully.");
            fetchReviews(exhibitId);
        } catch (error) {
            console.error("Error during review deletion:", error);
            console.log("Error details:", error.message || error);
        }
    };

    const handleEditReview = (id) => {
        navigate(`${ROUTES.EDIT_REVIEW}/${id}`, {
            state: { exhibitId: exhibitId },
        });
    };
    return { handleDeleteReview, handleLike, handleEditReview };
};

export default useReviewFunctions;
