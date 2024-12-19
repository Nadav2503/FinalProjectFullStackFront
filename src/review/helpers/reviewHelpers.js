import { useEffect, useState } from "react";

export const useReviewCardLogic = (review, currentUserId, fetchVisitorById, visitor, loading, error) => {
    const [isLiked, setIsLiked] = useState(false);
    const [username, setUsername] = useState("Anonymous"); // Default to "Anonymous"
    const isLikedByUser = review.likes.includes(currentUserId);

    useEffect(() => {
        const fetchVisitor = async () => {
            if (currentUserId && !loading && !error) {
                try {
                    await fetchVisitorById(review.visitorId);
                } catch (err) {
                    console.error("Failed to fetch visitor data", err);
                }
            }
        };

        if (currentUserId) {
            fetchVisitor();
        } else {
            setUsername("Anonymous"); // Fallback to "Anonymous" if not authorized
        }

        setIsLiked(isLikedByUser); // Set the initial like state based on the review data

        if (visitor?.username) {
            setUsername(visitor.username);
        } else if (error) {
            setUsername("Anonymous"); // Fallback to "Anonymous" if there's an error
        }
    }, [fetchVisitorById, review.visitorId, isLikedByUser, visitor, currentUserId, loading, error]);

    return { isLiked, setIsLiked, username };
};

export const toggleLike = (reviewId, handleLike, isLiked, setIsLiked) => {
    handleLike(reviewId); // Trigger the parent's handleLike function
    setIsLiked(!isLiked); // Toggle like state
};
