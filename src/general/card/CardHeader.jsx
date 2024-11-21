import React from 'react';
import { Box, Typography } from '@mui/material';

export default function CardHeader({ title, image }) {

    return (
        <Box
            className="card-header"

        >
            {image && (
                <Box

                >
                    <img />
                </Box>
            )}
            <Typography

            >
                {title}
            </Typography>
        </Box>
    );
}
