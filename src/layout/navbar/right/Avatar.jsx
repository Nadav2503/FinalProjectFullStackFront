import React from 'react';
import { IconButton, Avatar } from '@mui/material';

/**
 * AvatarProfileImage Component:
 * Displays a user's avatar wrapped in a clickable IconButton.
 * Clicking triggers the provided onClick handler.
 *
 * @param {function} onClick - Callback function to handle click events.
 */
export default function AvatarProfileImage({ onClick }) {
    return (
        <IconButton
            onClick={onClick} // Executes the provided click handler
            color="inherit" // Inherits color from the theme or parent
        >
            {/* Avatar displaying the user's profile image */}
            <Avatar
                alt="User Avatar" // Accessibility text for screen readers
                src="/images/avatar.png" // Path to the user's avatar imag
            />
        </IconButton>
    );
}
