import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import animalSchema from "../model/animalSchema";
import normalizeAnimal from "../helpers/normalizeAnimal";
import initializeAnimal from "../helpers/initializeAnimal";
import ROUTES from "../../routers/routerModel";
import AnimalEditForm from "../components/AnimalEditForm";
import useForm from "../../form/useForm";
import useGetAnimalById from "../hooks/useGetAnimalById";
import useUpdateAnimal from "../hooks/useUpdateAnimal";
import mapAnimalToModel from "../helpers/mapAnimalToModel";

export default function EditAnimalPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { animal, fetchAnimalById } = useGetAnimalById();
    const { handleUpdateAnimal } = useUpdateAnimal();

    // Handle form submission
    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleUpdateAnimal(id, formData);
                navigate(ROUTES.ANIMALS);
            } catch (error) {
                console.error("Failed to update animal:", error);
            }
        },
        [handleUpdateAnimal, id, navigate]
    );

    // Initialize form handling
    const { data, errors, handleChange, validateForm, onSubmit, setData } = useForm(
        animal || initializeAnimal,
        animalSchema, // Schema for validation
        handleSubmit // Form submission handler
    );

    // Fetch the animal data on mount
    useEffect(() => {
        fetchAnimalById(id); // Fetch animal data by ID
    }, [id, fetchAnimalById]);

    // Once animal data is fetched, normalize and set form data
    useEffect(() => {
        if (animal) {
            const normalizedData = normalizeAnimal(animal);
            const mappedData = mapAnimalToModel(normalizedData);
            setData(mappedData);
        }
    }, [animal, setData]);

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
    );
}
