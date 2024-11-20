import React from 'react';
import { IconButton, Avatar } from '@mui/material';

// Displays the user's avatar as a button. Clicking triggers the provided onClick handler.
export default function AvatarProfileImage({ onClick }) {
    return (
        // Icon button wraps the avatar for click functionality.
        <IconButton onClick={onClick} color="inherit" sx={{ ml: 2 }}>
            {/* Avatar image displayed. Customize src for the desired user avatar. */}
            <Avatar alt="User Avatar" src="/images/avatar.png" />
        </IconButton>
    );
}
