import React from "react";
import LoginForm from "../components/LoginForm";
import useLoginVisitor from "../hooks/useLoginVisitor";
import useForm from "../../form/useForm";
import initializeLogin from "../helpers/initialize/initializeLogin";
import loginSchema from "../model/loginSchema";
import { Box, Container } from "@mui/material";

const LoginPage = () => {
    const { handleLogin } = useLoginVisitor();

    const {
        data,
        errors,
        handleChange,
        validateForm,
        onSubmit
    } = useForm(initializeLogin, loginSchema, handleLogin);

    return (
        <Container>
            <Box

            >
                <LoginForm

                />
            </Box>
        </Container>
    );
};

export default LoginPage;
