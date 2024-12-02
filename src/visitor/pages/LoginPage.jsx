import React, { useCallback } from "react";
import LoginForm from "../components/LoginForm";
import useLoginVisitor from "../hooks/useLoginVisitor";
import useForm from "../../form/useForm";
import initializeLogin from "../helpers/initialize/initializeLogin";
import loginSchema from "../model/loginSchema";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routers/routerModel";

const LoginPage = () => {
    const { handleLogin } = useLoginVisitor();
    const navigate = useNavigate();


    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleLogin(formData);
                navigate(ROUTES.HOME);
            } catch (error) {
                console.error("Login failed:", error);
            }
        },
        [handleLogin]
    );

    const {
        data,
        errors,
        handleChange,
        validateForm,
        onSubmit
    } = useForm(initializeLogin, loginSchema, handleSubmit);

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <LoginForm
                    title="Login to your account"
                    submitLabel="Login"
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

export default LoginPage;
