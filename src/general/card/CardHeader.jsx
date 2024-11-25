import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function CardHeader({ title, image }) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-header"
            sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                alignItems: 'center',
                padding: 2,
            }
            }
        >
            {image && (
                <Box
                    sx={
                        {
                            width: isSmallScreen ? '100%' : '150px',
                            marginBottom: isSmallScreen ? 2 : 0,
                            display: 'flex',
                            justifyContent: 'center',
                        }
                    }
                >
                    <img
                        src={image}
                        alt={title}
                        className="card-header-image"
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </Box>
            )}
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    textAlign: 'center',
                    color: 'text.primary',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}