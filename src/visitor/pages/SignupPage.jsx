import React, { useCallback } from "react";
import SignupForm from "../components/SignupForm";
import useForm from "../../form/useForm";
import initializeSignup from "../helpers/initialize/initializeSignup";
import signupSchema from "../model/signupSchema";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routers/routerModel";
import useSignupVisitor from "../hooks/useSignupVisitor";

const SignupPage = () => {
    const { handleSignup } = useSignupVisitor();
    const navigate = useNavigate();

    const handleFormSubmit = useCallback(
        async (formData) => {

            try {
                await handleSignup(formData); // Call signup hook which now also logs in the user
                navigate(ROUTES.ROOT); // Navigate to the home page after successful signup & login
            } catch (error) {
                console.error("Signup failed:", error);
            }
        },
        [handleSignup, navigate]
    );

    const {
        data,
        errors,
        handleChange,
        validateForm,
        onSubmit,
    } = useForm(initializeSignup, signupSchema, handleFormSubmit);

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <SignupForm
                    title="Create your account"
                    submitLabel="Sign Up"
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange}
                />
            </Box>
        </Container>
    );
};

export default SignupPage;