import React, { useCallback } from "react";
import AnimalAddForm from "../components/AnimaAddlForm";
import initializeAnimal from "../helpers/initializeAnimal";
import { useNavigate } from "react-router-dom";
import useForm from "../../form/useForm";
import useCreateAnimal from "../hooks/useCreateAnimal";
import animalSchema from "../model/animalSchema";
import { Box, Container } from "@mui/material";
import ROUTES from "../../routers/routerModel";
export default function AddAnimalPage() {
    const { handleCreateAnimal } = useCreateAnimal();
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleCreateAnimal(formData); // API call to create the animal
                navigate(ROUTES.ANIMALS); // Navigate to the animals list page
            } catch (error) {
                console.error("Failed to create animal:", error);
            }
        },
        [handleCreateAnimal, navigate]
    );

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
                <AnimalAddForm
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
    );
}
