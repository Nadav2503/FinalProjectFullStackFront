import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { LocalOffer, Map } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Logo from '/images/zooLogo.png';
import PageHeader from '../general/PageHeader';
import CustomButton from '../general/CustomButton';
import Loader from '../general/Loader';
import Error from '../general/Error';

export default function Home() {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const theme = useTheme(); // Access the theme for consistent styling

    // // Simulate data fetching
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //         // Uncomment the next line to simulate an error
    //         // setError('Failed to load data');
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, []);

    // // Conditional rendering for loading and error states
    // if (loading) return <Loader />;
    // if (error) return <Error errorMessage={error} />;

    return (
        <Box
            sx={{
                background: theme.palette.mode === 'dark' ? '#1F4529' : '#C2FFC7',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4,
            }}
        >
            {/* Logo Section */}
            <Box sx={{ textAlign: 'center', marginBottom: 5 }}>
                <img
                    src={Logo}
                    alt="Virtual Zoo Logo"
                    style={{
                        width: '250px',
                        marginBottom: '30px',
                    }}
                />
            </Box>

            {/* Page Title with Arch Effect */}
            <Typography
                variant="h2"
                sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    fontSize: '3rem',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    marginBottom: 3,
                    transform: 'scaleX(1.1) translateY(-10px)',
                    textShadow: `3px 3px 6px ${theme.palette.mode === 'dark' ? '#000' : '#aaa'}`,
                    letterSpacing: 2,
                }}
            >
                Welcome to the Virtual Zoo
            </Typography>

            <PageHeader
                title=""
                subtitle="Explore animals, exhibits, and much more!"
            />

            {/* Buttons for Actions */}
            <Stack
                direction="row"
                spacing={3}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginTop: 4,
                }}
            >
                <CustomButton
                    color="primary"
                    size="large"
                    onClick={() => console.log('Buying Ticket')}
                    startIcon={<LocalOffer />}
                >
                    Buy Ticket
                </CustomButton>
                <CustomButton
                    color="secondary"
                    size="large"
                    onClick={() => console.log('Entering Zoo')}
                    startIcon={<Map />}
                >
                    Enter Zoo
                </CustomButton>
            </Stack>

            {/* Description Section */}
            <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: 5 }}>
                <Typography
                    variant="h4"
                    sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                        marginBottom: 3,
                    }}
                >
                    Discover the wonders of the animal kingdom from your home!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                    }}
                >
                    Experience the zoo like never before with interactive exhibits, animal facts,
                    and live cams! Whether you're here to learn, explore, or simply have fun,
                    the Virtual Zoo is your gateway to a wild adventure.
                </Typography>
            </Container>
        </Box>
    );
}
