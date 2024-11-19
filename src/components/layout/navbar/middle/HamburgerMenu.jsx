import React from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function HamburgerMenu({ isOpen, toggleHamburgerMenu }) {
    const toggleDrawer = () => {
        toggleHamburgerMenu();
    };

    return (
        <>
            <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
