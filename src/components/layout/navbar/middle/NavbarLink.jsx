import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for programmatic navigation

export default function NavBarLink({ to, sx, children }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to); // Programmatically navigate to the 'to' route
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer', ...sx }}>
            {children}
        </div>
    );
}
