import React from "react";
import NavBarLink from "./NavbarLink";
import { Button, Typography, useTheme } from "@mui/material";

export default function NavBarItem({ to, sx, label, variant = "horizontal" }) {
    const theme = useTheme();
    const isVertical = variant === "vertical";

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
                    border: `1px solid `,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                        borderColor: theme.palette.text.primary,
                    },
                }}
            >
                <Typography>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
