import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Error() {
    return (
        <Box>
            <Typography>
                404
            </Typography>
            <Typography>
                Oops! The page you're looking for doesn't exist.
            </Typography>
            <Button>
                Go Back
            </Button>
        </Box>
    );
}
