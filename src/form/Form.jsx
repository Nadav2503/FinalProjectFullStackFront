import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../general/CustomButton";


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
    const navigate = useNavigate();

    return (
        <Box
            component="form"
            sx={{
                mt: 2,
                p: { xs: 2, sm: 4 },
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "background.paper",
                ...styles,
            }}
            onSubmit={(e) => {
                e.preventDefault();
                if (validateForm()) {
                    onSubmit();
                }
            }}
            autoComplete="off"
            noValidate
        >
            {/* Form Title */}
            {title && (
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    mb={3}
                    sx={{ fontWeight: "bold" }}
                >
                    {title}
                </Typography>
            )}

            {/* Form Fields */}
            <Grid container spacing={spacing}>
                {children}
            </Grid>

            {/* Form Actions */}
            <Grid
                container
                spacing={2}
                mt={4}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={6}>
                    <CustomButton
                        variant="outlined"
                        color="error"
                        fullWidth
                        onClick={onCancel || (() => navigate(cancelPath))}
                    >
                        {cancelLabel}
                    </CustomButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isSubmitting || !validateForm()}
                    >
                        {submitLabel}
                    </CustomButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;