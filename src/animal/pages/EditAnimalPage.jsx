import React from 'react'
import AnimalEditForm from '../components/AnimalEditForm'
import { Box, Container } from '@mui/material'

export default function EditAnimalPage() {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AnimalEditForm
                    title="Edit Animal"
                    submitLabel="Update Animal"
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
