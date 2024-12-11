import React from 'react';
import CardBody from '../../../general/card/CardBody';
import { Rating, Typography } from '@mui/material';

export default function ReviewBody({ comment, rating, date }) {
    const content = (
        <>
            <Typography variant="body1">{comment}</Typography> {/* Review Comment */}
            <Typography variant="body2">
                Rating: <Rating name="read-only" value={rating} readOnly /> {/* Rating */}
            </Typography>
            <Typography variant="body2">{date}</Typography> {/* Review Date */}
        </>
    )
    return <CardBody content={content} />;
}
