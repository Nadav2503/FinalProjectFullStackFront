import React from 'react'
import { Box, Container } from "@mui/material";
import EditProfileForm from "../components/EditProfileForm";
export default function EditProfilePage() {
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
