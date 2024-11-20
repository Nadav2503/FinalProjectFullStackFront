import React from "react";
import { TextField, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";  // To access the theme

const Input = ({
    variant = "outlined",
    type = "text",
    name,
    data,
    label,
    required = true,
    error,
    onChange,
    ...rest
}) => {
    const theme = useTheme();  // Get the current theme (light or dark)
    const inputBorderColor = theme.palette.mode === "dark" ? "#B0BEC5" : "#47663B";  // Dark mode vs light mode color
    const inputTextColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";  // Text color adjustment
    const labelColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";  // Label color

    return (
        <Grid item xs={12} {...rest}>
            <TextField
            />
        </Grid>
    );
};

export default Input;