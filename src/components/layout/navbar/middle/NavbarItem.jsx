import React from "react";
import NavBarLink from "./NavbarLink";
import { Button, Typography, Box } from "@mui/material";

export default function NavBarItem({ to, sx, label }) {
    return (
        <NavBarLink to={to} sx={sx}>
            <Button
                color="inherit"
                sx={{
                    textTransform: 'none',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adds hover effect
                    },
                }}
            >
                <Typography>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
