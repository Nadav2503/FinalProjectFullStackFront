import React from "react";
import { TextField, Grid } from "@mui/material"; // MUI components for input and grid layout
import { useTheme } from "@mui/material/styles";  // To access the theme
import { makeFirstLetterCapital } from "./algoMethods"; // Utility function for capitalizing the first letter of a string

const Input = ({
    variant = "outlined", // Default variant is outlined
    type = "text", // Default input type is text
    name, // Name of the input field
    data, // Data object containing the current value of the input
    label, // Label for the input field
    required = true, // Set the input as required by default
    error, // Error message for validation
    onChange, // On change handler for the input field
    ...rest // Additional props to spread into the Grid item
}) => {
    const theme = useTheme(); // Access the current theme (light or dark)

    // Dynamic styling based on theme mode (light or dark)
    const inputBorderColor = theme.palette.mode === "dark" ? "#B0BEC5" : "#47663B";
    const inputTextColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";
    const labelColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";

    return (
        <Grid item xs={12} sm={6} {...rest}> {/* Grid item for responsiveness */}
            <TextField
                variant={variant} // Variant of the TextField (outlined)
                label={makeFirstLetterCapital(label)} // Capitalize the first letter of the label
                type={type} // Type of input (e.g., text, email, password)
                id={name} // Set the input field's ID
                name={name} // Name attribute for the input field
                value={data[name] ? data[name] : ""} // Get the value from data
                required={required} // Mark the input as required by default
                helperText={error} // Display error message if any
                error={Boolean(error)} // Display error state based on the presence of an error
                onChange={onChange} // Callback function for handling input changes
                fullWidth // Make the input take the full width of the container
                autoComplete="off" // Disable auto-completion
                sx={{
                    '& .MuiInputBase-root': {
                        borderColor: inputBorderColor, // Set the input border color
                        color: inputTextColor, // Set the text color inside the input
                    },
                    '& .MuiFormLabel-root': {
                        color: labelColor, // Set the label color
                    },
                    '& .MuiInputBase-input': {
                        color: inputTextColor, // Set the input text color
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: inputBorderColor, // Border color for the fieldset
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300", // Hover effect border color
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300", // Focused border color
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
