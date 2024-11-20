import React from 'react';
import NavBarLink from './NavbarLink';
import { Button, Typography, useTheme } from '@mui/material';

export default function NavBarItem({ to, sx, label, variant = 'horizontal' }) {
    const theme = useTheme();
    const isVertical = variant === 'vertical';

    // Determine background and hover colors based on the current theme
    const backgroundColor = theme.palette.mode === 'dark' ? '#3D5300' : '#9EDF9C'; // Dark mode: deep green, Light mode: light green
    const hoverBackgroundColor = theme.palette.mode === 'dark' ? '#F09319' : '#526E48'; // Dark mode: warm orange, Light mode: muted dark green

    // Dynamic border color based on theme
    const borderColor = theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main; // Using theme primary and secondary for border

    // Add shadow effect for glowing effect
    const boxShadow = theme.palette.mode === 'dark' ? '0 4px 8px rgba(255, 255, 255, 0.1)' : '0 4px 8px rgba(0, 0, 0, 0.2)'; // Subtle shadow for dark and light mode

    return (
        <NavBarLink
            to={to}
            sx={{
                display: isVertical ? 'block' : 'inline-block',
                width: isVertical ? '100%' : 'auto',
                textAlign: isVertical ? 'center' : 'left',
                ...sx,
            }}
        >
            <Button
                color="inherit"
                fullWidth={isVertical}
                sx={{
                    textTransform: 'none',
                    padding: isVertical ? '12px' : '8px 16px',
                    borderRadius: '8px',
                    marginBottom: isVertical ? 1 : 0,
                    marginRight: isVertical ? 0 : 1,
                    border: `1px solid ${borderColor}`, // Dynamic border color from theme
                    backgroundColor: backgroundColor, // Dynamic background color based on theme
                    boxShadow: boxShadow, // Adding shadow effect
                    '&:hover': {
                        backgroundColor: hoverBackgroundColor, // Hover effect based on theme
                        borderColor: hoverBackgroundColor, // Border color changes on hover
                        boxShadow: `0 4px 8px ${hoverBackgroundColor}`, // Glow effect on hover
                    },
                }}
            >
                <Typography sx={{ color: theme.palette.text.primary }}>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
