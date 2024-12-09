import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import useUpdateVisitorProfile from "../hooks/useUpdateVisitorProfile";
import EditProfileForm from "../components/EditProfileForm";
import useGetVisitorById from "../hooks/useVisitorDataById";

export default function EditProfilePage() {
    const { id } = useParams();
    const { visitor, fetchVisitorById } = useGetVisitorById();
    const { handleUpdateProfile } = useUpdateVisitorProfile();
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleUpdateProfile(id, formData);
                navigate("/");
            } catch (error) {
                console.error("Failed to update profile:", error);
            }
        },
        [handleUpdateProfile, visitor, navigate]
    );

    return (
        <Container>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <EditProfileForm
                    title="Edit Profile"
                    submitLabel="Save Changes"
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
