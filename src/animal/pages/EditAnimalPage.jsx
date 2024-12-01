import React from 'react'
import AnimalEditForm from '../components/AnimalEditForm'
import { Box, Container } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import useGetAnimalById from '../hooks/useGetAnimalById';
import useUpdateAnimal from '../hooks/useUpdateAnimal';
import initializeAnimal from "../helpers/initializeAnimal";

export default function EditAnimalPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { animal, fetchAnimalById } = useGetAnimalById();
    const { handleUpdateAnimal } = useUpdateAnimal();

    // Initialize form handling
    const { data, errors, handleChange, validateForm, onSubmit, setData } = useForm(
        animal || initializeAnimal, // Initialize form with fetched data (or empty object if not available)
        animalSchema, // Schema for validation
        handleSubmit // Form submission handler
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
