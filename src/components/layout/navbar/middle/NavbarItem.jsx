import React from 'react';
import NavBarLink from './NavbarLink';
import { Button, Typography, useTheme } from '@mui/material';

export default function NavBarItem({ to, sx, label, variant = 'horizontal' }) {
    const theme = useTheme(); // Access theme for styling.

    // Determine if the layout is vertical.
    const isVertical = variant === 'vertical';

    return (
        // Link wrapper for navigation item
        <NavBarLink
            to={to}
            sx={{
                display: isVertical ? 'block' : 'inline-block', // Block layout for vertical items.
                width: isVertical ? '100%' : 'auto',
                textAlign: isVertical ? 'center' : 'left',
                ...sx,
            }}
        >
            {/* Styled button for the navigation item */}
            <Button
                color="inherit"
                fullWidth={isVertical} // Full width only for vertical items.
                sx={{
                    textTransform: 'none', // Maintain case formatting.
                    padding: isVertical ? '12px' : '8px 16px', // Adjust padding for layout.
                    borderRadius: '8px',
                    marginBottom: isVertical ? 1 : 0,
                    marginRight: isVertical ? 0 : 1,
                    border: `1px solid `,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover, // Highlight on hover.
                        borderColor: theme.palette.text.primary, // Border color on hover.
                    },
                }}
            >
                <Typography>{label}</Typography> {/* Label text */}
            </Button>
        </NavBarLink>
    );
}
