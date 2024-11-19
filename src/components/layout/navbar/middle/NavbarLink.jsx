import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function NavbarLink({ to, children }) {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <Button color="inherit">{children}</Button>
        </Link>
    );
}
