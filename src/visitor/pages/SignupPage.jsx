import React from "react";
import SignupForm from "../components/SignupForm";
import useForm from "../../form/useForm";
import initializeSignup from "../helpers/initialize/initializeSignup";
import signupSchema from "../model/signupSchema";
import { Box, Container } from "@mui/material";

import useSignupVisitor from "../hooks/useSignupVisitor";

const SignupPage = () => {
    const { handleSignup } = useSignupVisitor();



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

            >
                <SignupForm

                />
            </Box>
        </Container>
    );
};

export default SignupPage;