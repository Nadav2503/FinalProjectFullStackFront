import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

export default function Error({ errorMessage }) {
    return (
        <Container sx={{ textAlign: 'center', marginTop: 5 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" color="error">
                        Oops... something went wrong: {errorMessage}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        width="100%"
                        src="/images/robot.png"
                        alt="Error Illustration"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
