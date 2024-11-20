import React from 'react';
import { Divider, Typography, Container } from '@mui/material';

export default function PageHeader({ title, subtitle }) {

    return (
        <Container

        >
            <Typography

            >
                {title}
            </Typography>
            <Typography

            >
                {subtitle}
            </Typography>
            <Divider />
        </Container>
    );
}
