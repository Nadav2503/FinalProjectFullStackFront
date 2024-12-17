import React, { useEffect, useState } from 'react';
import Card from '../../../general/card/Card';
import ReviewHeader from './ReviewHeader';
import ReviewBody from './ReviewBody';
import ReviewActionBar from './ReviewActionBar';
import useGetVisitorById from '../../../visitor/hooks/useVisitorDataById';

export default function ReviewCard({
    review,
    handleEdit,
    handleDelete,
    handleLike,
    currentUserId
}) {
    const { visitor, fetchVisitorById, loading, error } = useGetVisitorById();
    const [isLiked, setIsLiked] = useState(false);
    const [username, setUsername] = useState("Anonymous"); // Default to "Anonymous"

    // Check if the current user has liked this review
    const isLikedByUser = review.likes.includes(currentUserId);

    useEffect(() => {
        if (currentUserId) { // Only fetch visitor if currentUserId is provided
            const fetchVisitor = async () => {
                // Check if visitor data is already available or loading
                if (!visitor && !loading && !error) {
                    try {
                        await fetchVisitorById(review.visitorId);
                    } catch (err) {
                        console.error('Failed to fetch visitor data', err);
                    }
                }
            };

            fetchVisitor();
        } else {
            setUsername("Anonymous"); // Fallback to "Anonymous" if not authorized
        }

        // Set the like state
        setIsLiked(isLikedByUser); // Set the initial like state based on the review data

        // Set username when visitor is fetched or error occurs
        if (visitor?.username) {
            setUsername(visitor.username);
        } else if (error) {
            setUsername("Anonymous"); // Fallback to "Anonymous" if there's an error
        }
    }, [fetchVisitorById, review.visitorId, isLikedByUser, visitor, currentUserId, loading, error]);

    const handleLikeClick = () => {
        handleLike(review._id); // Trigger the parent's handleLike function
        setIsLiked(!isLiked); // Toggle like state
    };

    return (
        <Card>
            <ReviewHeader visitorId={username} /> {/* Display username or "Anonymous" */}

            <ReviewBody comment={review.comment} rating={review.rating} date={review.date} />

            <ReviewActionBar
                reviewId={review._id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleLike={handleLikeClick}
                isLiked={isLiked} // Pass the dynamically computed liked status
            />
        </Card>
    );
}
