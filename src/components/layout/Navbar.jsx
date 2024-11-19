import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Virtual Zoo
                </Typography>
                <Box>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" sx={{ marginRight: 2 }}>
                            Home
                        </Button>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" sx={{ marginRight: 2 }}>
                            About
                        </Button>
                    </Link>
                    <Link to="*" style={{ textDecoration: 'none' }}>
                        <Button color="inherit">Contact</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
