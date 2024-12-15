import React, { useEffect, useState } from 'react';
import Card from '../../../general/card/Card';
import ReviewHeader from './ReviewHeader';
import ReviewBody from './ReviewBody';
import ReviewActionBar from './ReviewActionBar';
import { CardActionArea } from '@mui/material';
import useGetVisitorById from '../../../visitor/hooks/useVisitorDataById';

export default function ReviewCard({ review, handleEdit, handleDelete, handleLike }) {
    const { visitor, fetchVisitorById } = useGetVisitorById();
    const [liked, setLiked] = useState(review.likes.includes(review.visitorId));
    useEffect(() => {
        fetchVisitorById(review.visitorId);
    }, [fetchVisitorById, review.visitorId]);
    const handleLikeClick = () => {
        handleLike(review._id); // Call the parent's handleLike function
        setLiked(!liked); // Toggle local liked state
    };
    return (
        <Card>
            <ReviewHeader visitorId={visitor?.username} />
            <CardActionArea>
                <ReviewBody comment={review.comment} rating={review.rating} date={review.date} />
            </CardActionArea>
            <ReviewActionBar
                reviewId={review._id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleLike={handleLikeClick}
                liked={liked}
            />
        </Card>
    );
}
