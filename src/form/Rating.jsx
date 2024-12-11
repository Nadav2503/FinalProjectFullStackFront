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
                {label}
            </Typography>
            <Rating

            />
            {error && <Typography >{error}</Typography>}
        </Grid>
    );
};

export default RatingField;
