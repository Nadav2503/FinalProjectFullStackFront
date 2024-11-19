import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography>
                    Virtual Zoo
                </Typography>
                <Box>
                    <Button>
                        Home
                    </Button>
                    <Button>
                        About
                    </Button>
                    <Button>Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
