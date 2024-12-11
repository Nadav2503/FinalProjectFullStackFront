import React from 'react';
import Card from '../../../general/card/Card';
import ReviewHeader from './ReviewHeader';
import ReviewBody from './ReviewBody';
import ReviewActionBar from './ReviewActionBar';
import { CardActionArea } from '@mui/material';

export default function ReviewCard({ review, handleEdit, handleDelete, handleLike }) {
    return (
        <Card>
            <ReviewHeader visitorId={review.visitorId} />
            <CardActionArea>
                <ReviewBody comment={review.comment} rating={review.rating} date={review.date} />
            </CardActionArea>
            <ReviewActionBar
                reviewId={review.id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleLike={handleLike}
            />
        </Card>
    );
}
