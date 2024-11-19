import React from 'react';
import { IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarItem from './NavbarItem'; // Import the reusable NavBarItem component

export default function HamburgerMenu({ isOpen, toggleHamburgerMenu }) {
    const toggleDrawer = () => {
        toggleHamburgerMenu();
    };

    return (
        <>
            {/* Hamburger Menu Icon */}
            <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon />
            </IconButton>

            {/* Drawer for Navigation */}
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                <List>
                    {/* Navigation Links */}
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
