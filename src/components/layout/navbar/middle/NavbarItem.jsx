import React from "react";
import NavBarLink from "./NavbarLink";
import { Button, Typography, Box } from "@mui/material";

export default function NavBarItem({ to, sx, label }) {
    return (
        <NavBarLink to={to} sx={{ display: 'inline-block', ...sx }}>
            <Button
                color="inherit"
                sx={{
                    textTransform: 'none',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid', // Default border (transparent to avoid background clashes)
                    marginRight: 2, // Add spacing between items
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adds hover background
                        border: '1px solid #fff', // Add border on hover
                    },
                }}
            >
                <Typography>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
