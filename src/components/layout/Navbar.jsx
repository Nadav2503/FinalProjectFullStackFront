import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Virtual Zoo
                </Typography>
                <Box>
                    <Button color="inherit" sx={{ marginRight: 2 }}>
                        Home
                    </Button>
                    <Button color="inherit" sx={{ marginRight: 2 }}>
                        About
                    </Button>
                    <Button color="inherit">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
