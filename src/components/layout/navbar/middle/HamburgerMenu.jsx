import React from 'react';
import { IconButton, Drawer, List, ListItem, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarItem from './NavbarItem';

export default function HamburgerMenu({ isOpen, toggleHamburgerMenu }) {
    const theme = useTheme();

    const toggleDrawer = () => {
        toggleHamburgerMenu();
    };

    return (
        <>
            <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.background.paper, // Theme-based background
                        color: theme.palette.text.primary,              // Theme-based text color
                    },
                }}
            >
                <List>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to="/" label="Home" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to="/about" label="About" />
                    </ListItem>
                    <ListItem onClick={toggleDrawer}>
                        <NavBarItem to="*" label="Error" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
