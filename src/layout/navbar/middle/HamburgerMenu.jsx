import React from 'react';
import { IconButton, Drawer, List, ListItem, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarItem from './NavbarItem';

export default function HamburgerMenu({ isOpen, toggleHamburgerMenu }) {
    const theme = useTheme(); // Access the current theme for styling.

    // Function to toggle the drawer state.
    const toggleDrawer = () => {
        toggleHamburgerMenu();
    };

    return (
        <>
            {/* Icon button to open the hamburger menu */}
            <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon />
            </IconButton>

            {/* Drawer component representing the side menu */}
            <Drawer
                anchor="left" // The drawer slides in from the left.
                open={isOpen} // Controlled by the parent component.
                onClose={toggleDrawer} // Closes the drawer when clicked outside.
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.background.paper, // Theme background color.
                        color: theme.palette.text.primary, // Theme text color.
                    },
                }}
            >
                {/* List of navigation items inside the drawer */}
                <List>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to="/" label="Home" variant="vertical" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to="/about" label="About" variant="vertical" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to="*" label="Error" variant="vertical" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
