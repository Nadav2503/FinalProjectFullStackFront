import { Box, Container } from '@mui/material'
import React from 'react'
import AnimalForm from '../components/AnimalForm'
import useCreateAnimal from '../hooks/useCreateAnimal';
import { useNavigate } from 'react-router-dom';
import initializeAnimal from "../helpers/initializeAnimal";

export default function AddAnimalPage() {
    const { handleCreateAnimal } = useCreateAnimal();
    const navigate = useNavigate();
    const { data, errors, handleChange, validateForm, onSubmit } = useForm(
        initializeAnimal, // Initializes the form with default animal data
        animalSchema, // Validation schema
        handleSubmit // Submission handler
    );
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
