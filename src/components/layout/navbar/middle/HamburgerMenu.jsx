import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
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
