import React from 'react';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import { Instagram, LinkedIn, Phone, Email } from '@mui/icons-material'; // MUI icons for social links

export default function Footer() {
    const theme = useTheme(); // Access theme to use dynamic colors

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.primary.main, // Footer background color
                color: theme.palette.text.primary, // Text color based on theme
                textAlign: 'center', // Center align the content
                padding: '1rem', // Padding for spacing
                marginTop: 'auto', // Push footer to the bottom
            }}
        >
            {/* Footer Content */}
            <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                © {new Date().getFullYear()} Virtual Zoo. All rights reserved.
            </Typography>

            {/* Social Media Links */}
            <Box

            >
                {/* Instagram */}
                <IconButton

                >
                    <Instagram />
                </IconButton>

                {/* LinkedIn */}
                <IconButton

                >
                    <LinkedIn />
                </IconButton>

                {/* Phone */}
                <IconButton

                >
                    <Phone />
                </IconButton>

                {/* Email */}
                <IconButton

                >
                    <Email />
                </IconButton>
            </Box>
        </Box>
    );
}
