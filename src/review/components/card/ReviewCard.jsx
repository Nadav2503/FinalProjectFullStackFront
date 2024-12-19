import React from "react";
import Card from "../../../general/card/Card";
import ReviewHeader from "./ReviewHeader";
import ReviewBody from "./ReviewBody";
import ReviewActionBar from "./ReviewActionBar";
import useGetVisitorById from "../../../visitor/hooks/useVisitorDataById";
import { toggleLike, useReviewCardLogic } from "../../helpers/reviewHelpers";
import { canEditOrDelete, canLike, isTier1 } from "../../../general/helpers/permission";

export default function ReviewCard({
    review,
    handleEdit,
    handleDelete,
    handleLike,
    currentUserId,
    visitor,
}) {
    const { fetchVisitorById, loading, error } = useGetVisitorById();

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

    const editOrDeletePermission = canEditOrDelete(visitor, review.visitorId);
    const likePermission = canLike(visitor);

    return (
        <Card>
            <ReviewHeader visitorId={username} />
            <ReviewBody comment={review.comment} rating={review.rating} date={review.date} />
            {!isTier1(visitor) && (
                <ReviewActionBar
                    reviewId={review._id}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleLike={handleLikeClick}
                    isLiked={isLiked}
                    canEditOrDelete={editOrDeletePermission}
                    canLike={likePermission}
                />
            )}
        </Card>
    );
}
