import React from 'react';
import { Typography } from '@mui/material';

export default function ReviewBody({ comment, rating, date }) {
    return (
        <div>
            <Typography variant="body1">{comment}</Typography> {/* Review Comment */}
            <Typography variant="body2">Rating: {rating}</Typography> {/* Rating */}
            <Typography variant="body2">{date}</Typography> {/* Review Date */}
        </div>
    );
}
