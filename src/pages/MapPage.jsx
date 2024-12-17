import React from 'react'
import PageHeader from '../general/PageHeader'
import { Container } from '@mui/material'

export default function MapPage() {
    const zones = [
        { name: "Africa", location: "Africa", color: "#FFCC00" },
        { name: "Asia", location: "Asia", color: "#FF7043" },
        { name: "Europe", location: "Europe", color: "#4DB6AC" },
        { name: "North America", location: "North America", color: "#29B6F6" },
        { name: "South America", location: "South America", color: "#81C784" },
        { name: "Australia", location: "Australia", color: "#FFD54F" },
        { name: "Antarctica", location: "Antarctica", color: "#B3E5FC" },
    ];
    return (
        <Container>
            <PageHeader title="Zoo Map">
            </PageHeader>
            <Grid container spacing={3} justifyContent="center">

            </Grid>
        </Container>
    )
}
