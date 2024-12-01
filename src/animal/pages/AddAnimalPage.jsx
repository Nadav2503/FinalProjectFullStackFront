import { Box, Container } from '@mui/material'
import React from 'react'
import AnimalForm from '../components/AnimalForm'

export default function AddAnimalPage() {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AnimalForm
                    title="Add New Animal"
                    submitLabel="Create Animal"
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange}
                />
            </Box>
        </Container>
    )
}
