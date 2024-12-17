import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { LocalOffer, Map, Pets, Public } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Logo from '/images/zooLogo.png';
import CustomButton from '../general/CustomButton';
import ROUTES from '../routers/routerModel';
import { useCurrentVisitor } from '../providers/VisitorProvider';
import { useSnack } from '../providers/SnackbarProvider';

export default function Home() {
    // Access the theme to apply consistent styling based on light or dark mode
    const theme = useTheme();
    const navigate = useNavigate();
    const { authStatus } = useCurrentVisitor(); // Access authStatus from context
    const setSnack = useSnack(); // Snackbar hook for showing messages

    // Function to handle Buy Ticket button click (only shown when user is not logged in)
    const handleBuyTicketClick = () => {
        navigate(ROUTES.SIGNUP); // Navigate to the signup page
    };

    // Function to handle Enter Zoo button click (check if logged in)
    const handleEnterZooClick = () => {
        if (!authStatus) {
            // If the user is not logged in, show a Snackbar message
            setSnack('error', 'You must be logged in to enter the zoo');

            // Delay the navigation to the login page so the user can see the message
            setTimeout(() => {
                navigate(ROUTES.LOGIN); // Navigate to the login page after a brief delay
            }, 3000);
        } else {
            // If logged in, navigate to the map page
            navigate(ROUTES.MAP);
        }
    };

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
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <img
                    src={Logo}
                    alt="Virtual Zoo Logo"
                    style={{
                        width: '250px',
                        marginBottom: '30px',
                    }}
                />
            </Box>

            {/* Title Section */}
            <Pets sx={{ fontSize: '3rem' }} />
            <Typography
                variant="h1"
                sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', sm: '3rem' },
                    textAlign: 'center',
                    marginBottom: 3,
                    textShadow: `3px 3px 6px ${theme.palette.mode === 'dark' ? '#000' : '#aaa'}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Public sx={{ marginRight: '8px', fontSize: '2rem' }} />
                Welcome to the Virtual Zoo
                <Public sx={{ marginLeft: '8px', fontSize: '2rem' }} />
            </Typography>

            {/* Action Buttons Section */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginTop: 4,
                }}
            >
                {/* Conditionally render the Buy Ticket button */}
                {!authStatus && (
                    <CustomButton
                        color="primary"
                        size="large"
                        startIcon={<LocalOffer />}
                        sx={{ width: '200px' }}
                        onClick={handleBuyTicketClick}
                    >
                        Buy Ticket
                    </CustomButton>
                )}

                {/* Show Enter Zoo button for all users, but handle navigation based on authStatus */}
                <CustomButton
                    color="secondary"
                    size="large"
                    startIcon={<Map />}
                    sx={{ width: '200px' }}
                    onClick={handleEnterZooClick}
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
