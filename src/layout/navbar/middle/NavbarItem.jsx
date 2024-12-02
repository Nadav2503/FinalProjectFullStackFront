import React from 'react';
import { Button, Typography, useTheme } from '@mui/material';
import NavBarLink from './NavbarLink'; // Component that renders the link for navigation

export default function NavBarItem({ to, sx, label, variant = 'horizontal', onClick }) {
    const theme = useTheme(); // Access the current theme for dynamic styling
    const isVertical = variant === 'vertical'; // Check if the item is to be rendered vertically or horizontally

    // Determine background and hover colors based on the current theme
    const backgroundColor = theme.palette.mode === 'dark' ? '#3D5300' : '#9EDF9C'; // Dark mode: deep green, Light mode: light green
    const hoverBackgroundColor = theme.palette.mode === 'dark' ? '#F09319' : '#526E48'; // Dark mode: warm orange, Light mode: muted dark green

    // Dynamic border color based on theme
    const borderColor = theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main;

    // Add shadow effect for glowing effect
    const boxShadow = theme.palette.mode === 'dark' ? '0 4px 8px rgba(255, 255, 255, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.2)';

    // Function to handle the click event
    const handleClick = (event) => {
        if (onClick) onClick(event); // Execute additional actions passed through the `onClick` prop (e.g., logout)
        if (to) window.location.href = to; // If a `to` prop is passed, navigate
    };

    return (
        <NavBarLink to={to} sx={{ display: isVertical ? 'block' : 'inline-block', width: isVertical ? '100%' : 'auto', textAlign: isVertical ? 'center' : 'left', ...sx }}>
            <Button
                color="inherit"
                fullWidth={isVertical} // Full width for vertical layout
                sx={{
                    textTransform: 'none', // Disable uppercase transformation
                    padding: isVertical ? '12px' : '8px 16px', // Adjust padding based on layout
                    borderRadius: '8px', // Rounded corners for button
                    marginBottom: isVertical ? 1 : 0, // Space below button if vertical
                    marginRight: isVertical ? 0 : 1, // Space to the right if horizontal
                    border: `1px solid ${borderColor}`, // Dynamic border color based on theme
                    backgroundColor: backgroundColor, // Dynamic background color based on theme
                    boxShadow: boxShadow, // Add shadow effect based on theme
                    '&:hover': {
                        backgroundColor: hoverBackgroundColor, // Hover background color
                        borderColor: hoverBackgroundColor, // Hover border color
                        boxShadow: `0 4px 8px ${hoverBackgroundColor}`, // Glow effect on hover
                    },
                }}
                onClick={handleClick} // Attach the click handler here
            >
                <Typography sx={{ color: theme.palette.text.primary }}>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
