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
    const { visitor, fetchVisitorById } = useGetVisitorById();
    const [isLiked, setIsLiked] = useState(false);
    const [username, setUsername] = useState("Anonymous"); // Default to "Anonymous"

    // Check if the current user has liked this review
    const isLikedByUser = review.likes.includes(currentUserId);

    useEffect(() => {
        const fetchVisitor = async () => {
            try {
                await fetchVisitorById(review.visitorId);
                if (visitor?.username) {
                    setUsername(visitor.username); // Set the username if found
                }
            } catch (error) {
                console.error('Failed to fetch visitor data', error);
                setUsername("Anonymous"); // Set to "Anonymous" if there's an error
            }
        };

        fetchVisitor();
        setIsLiked(isLikedByUser); // Set the initial like state based on the review data
    }, [fetchVisitorById, review.visitorId, isLikedByUser, visitor]);

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
