import React from "react";
import Card from "../../../general/card/Card";
import ReviewHeader from "./ReviewHeader";
import ReviewBody from "./ReviewBody";
import ReviewActionBar from "./ReviewActionBar";
import useGetVisitorById from "../../../visitor/hooks/useVisitorDataById";
import { toggleLike, useReviewCardLogic } from "../../helpers/reviewHelpers";


export default function ReviewCard({
    review,
    handleEdit,
    handleDelete,
    handleLike,
    currentUserId,
    visitor,
}) {
    const { fetchVisitorById, loading, error } = useGetVisitorById();

    // Extract logic using the helper function
    const { isLiked, setIsLiked, username } = useReviewCardLogic(
        review,
        currentUserId,
        fetchVisitorById,
        visitor,
        loading,
        error
    );

    const handleLikeClick = () => {
        toggleLike(review._id, handleLike, isLiked, setIsLiked);
    };

    // Permissions logic (can later be moved to a permissions helper)
    const isTier1 = visitor?.membershipTier === 1;
    const canEditOrDelete = visitor?.isAdmin || review.visitorId === currentUserId;
    const canLike = visitor?.membershipTier !== 1 || visitor?.isAdmin;

    return (
        <Card>
            <ReviewHeader visitorId={username} /> {/* Display username or "Anonymous" */}
            <ReviewBody comment={review.comment} rating={review.rating} date={review.date} />
            {!isTier1 && (
                <ReviewActionBar
                    reviewId={review._id}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleLike={handleLikeClick}
                    isLiked={isLiked}
                    canEditOrDelete={canEditOrDelete}
                    canLike={canLike}
                />
            )}
        </Card>
    );
}
