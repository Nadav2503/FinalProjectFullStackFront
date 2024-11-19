import React from 'react'
import { Button, Container, Typography } from '@mui/material';

export default function HomePage() {
    return (
        <div className="home-page">
            <Container>
                <Typography>
                    Welcome to the Virtual Zoo!
                </Typography>

                <Button>
                    Buy Ticket
                </Button>

                <Button>
                    Enter Zoo
                </Button>
            </Container>
        </div>
    )
}
