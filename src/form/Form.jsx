import React from "react";
import { Box, Grid, Typography } from "@mui/material"; // MUI components for layout
import { useNavigate } from "react-router-dom"; // Hook for navigation
import CustomButton from "../general/CustomButton"; // Custom button component for form actions

const Form = ({
    title = "",
    onSubmit,
    onCancel,
    validateForm = () => true,
    children,
    spacing = 2,
    submitLabel = "Submit",
    cancelLabel = "Cancel",
    isSubmitting = false,
    cancelPath = "/",
    styles = {},
}) => {
    const navigate = useNavigate(); // Hook for navigating to the cancel path

    return (
        <Box
            component="form"
            sx={{
                mt: 2, // Margin top for spacing
                p: { xs: 2, sm: 4 }, // Padding for small screens (xs) and larger screens (sm)
                borderRadius: 2, // Rounded corners
                boxShadow: 3, // Box shadow for visual separation
                backgroundColor: "background.paper", // Background color from theme
                ...styles, // Apply additional custom styles if provided
            }}
            onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                if (validateForm()) { // Validate the form before submitting
                    onSubmit(); // Call the onSubmit callback
                }
            }}
            autoComplete="off" // Disable browser autocomplete
            noValidate // Disable native HTML5 validation
        >
            {/* Form Title */}
            {title && (
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    mb={3}
                    sx={{ fontWeight: "bold" }} // Bold title text
                >
                    {title}
                </Typography>
            )}

            {/* Form Fields */}
            <Grid container spacing={spacing}> {/* Use Grid layout for form fields */}
                {children} {/* Render form fields passed as children */}
            </Grid>

            {/* Form Actions (Buttons) */}
            <Grid
                container
                spacing={2}
                mt={4} // Margin top for spacing
                justifyContent="center" // Center align buttons horizontally
                alignItems="center" // Center align buttons vertically
            >
                {/* Cancel Button */}
                <Grid item xs={12} sm={6}>
                    <CustomButton
                        variant="outlined"
                        color="error"
                        fullWidth
                        onClick={onCancel || (() => navigate(cancelPath))} // Handle cancel click
                    >
                        {cancelLabel} {/* Button label */}
                    </CustomButton>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12} sm={6}>
                    <CustomButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isSubmitting || !validateForm()} // Disable button if submitting or form is invalid
                    >
                        {submitLabel} {/* Button label */}
                    </CustomButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
