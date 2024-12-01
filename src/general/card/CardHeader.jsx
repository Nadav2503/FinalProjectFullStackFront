import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function CardHeader({ title, image }) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-header"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
            }
            }
        >
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
                        src={image.url}
                        alt={image.alt}
                        className="card-header-image"
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </Box>
            )}

        </Box>
    );
}