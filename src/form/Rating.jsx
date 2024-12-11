import React from 'react';
import { Grid, Typography, Rating } from '@mui/material';

const RatingField = ({
    name,
    label,
    data,
    error,
    onChange,
    required = true,
    ...rest
}) => {
    return (
        <Grid item xs={12} sm={6} {...rest}>
            <Typography>

            </Typography>
            <Rating

            />

        </Grid>
    );
};

export default RatingField;
