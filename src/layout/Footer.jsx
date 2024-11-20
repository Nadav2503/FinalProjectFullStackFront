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
                sx={{
                    display: 'flex', // Arrange items horizontally
                    justifyContent: 'center', // Center align items
                    gap: '1rem', // Space between items
                    marginTop: '0.5rem', // Add spacing above social links
                }}
            >
                {/* Instagram */}
                <IconButton
                    component="a"
                    href="https://www.instagram.com/yourhandle" //placeholder
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    sx={{ color: theme.palette.text.primary }}
                >
                    <Instagram />
                </IconButton>

                {/* LinkedIn */}
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/yourprofile" //placeholder
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    sx={{ color: theme.palette.text.primary }}
                >
                    <LinkedIn />
                </IconButton>

                {/* Phone */}
                <IconButton
                    component="a"
                    href="tel:+1234567890" //placeholder
                    aria-label="Phone"
                    sx={{ color: theme.palette.text.primary }}
                >
                    <Phone />
                </IconButton>

                {/* Email */}
                <IconButton
                    component="a"
                    href="mailto:your.email@example.com" //placeholder
                    aria-label="Email"
                    sx={{ color: theme.palette.text.primary }}
                >
                    <Email />
                </IconButton>
            </Box>
        </Box>
    );
}
