import React from "react";
import NavBarLink from "./NavbarLink";
import { Button, Typography, useTheme } from "@mui/material";

export default function NavBarItem({ to, sx, label }) {
    const theme = useTheme();

    return (
        <NavBarLink to={to} sx={{ display: 'inline-block', ...sx }}>
            <Button
                color="inherit"
                sx={{
                    textTransform: 'none',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: `1px solid transparent`, // Default border
                    marginRight: 2,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover, // Theme-based hover background
                        borderColor: theme.palette.text.primary,    // Theme-based border
                    },
                }}
            >
                <Typography>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
