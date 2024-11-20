import React from "react";
import { TextField, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";  // To access the theme
import { makeFirstLetterCapital } from "./algoMethods";

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
                variant={variant}
                label={makeFirstLetterCapital(label)}
                type={type}
                id={name}
                name={name}
                value={data[name] ? data[name] : ""}
                required={required}
                helperText={error}
                error={Boolean(error)}
                onChange={onChange}
                fullWidth
                autoComplete="off"
                sx={{
                    '& .MuiInputBase-root': {
                        borderColor: inputBorderColor,
                        color: inputTextColor,
                    },
                    '& .MuiFormLabel-root': {
                        color: labelColor, // Default label color
                    },
                    '& .MuiInputBase-input': {
                        color: inputTextColor,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: inputBorderColor,
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300",  // Adjust hover color
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300", // Focus border color
                        },
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                        color: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300", // Focused label color
                    },
                }}
            />
        </Grid>
    );
};

export default Input;