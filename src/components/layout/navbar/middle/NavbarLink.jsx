import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBarLink({ to, sx, children }) {
    const navigate = useNavigate(); // Router hook for navigation.

    // Navigate to the specified route on click.
    const handleClick = () => {
        navigate(to);
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer', ...sx }}>
            {children} {/* Render children elements (e.g., buttons or text). */}
        </div>
    );
}
