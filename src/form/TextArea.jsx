import React from "react";
import { TextField, Grid, Typography } from "@mui/material"; // MUI components
import { useTheme } from "@mui/material/styles";  // To access the theme
import { makeFirstLetterCapital } from "./algoMethod"; // Utility function for capitalizing the first letter of a string

const TextArea = ({
    name, // Name of the text area
    data, // Data object containing the current value of the text area
    label, // Label for the text area
    required = true, // Set the text area as required by default
    error, // Error message for validation
    onChange, // On change handler for the text area
    ...rest // Additional props to spread into the Grid item
}) => {
    const theme = useTheme(); // Access the current theme (light or dark)

    // Dynamic styling based on theme mode (light or dark)
    const inputBorderColor = theme.palette.mode === "dark" ? "#B0BEC5" : "#47663B";
    const inputTextColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";
    const labelColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";

    return (
        <Grid item xs={12} sm={6} {...rest}> {/* Grid item for responsiveness */}
            <Typography Typography variant="body2" sx={{ color: labelColor, mb: 1 }
            }>
                {makeFirstLetterCapital(label)} {/* Label displayed above the text area */}
            </Typography>
            < TextField
                variant="outlined" // Use the outlined variant for text area
                name={name} // Name attribute for the text area
                value={data[name] ? data[name] : ""} // Get the value from data
                onChange={onChange} // Callback function for handling text changes
                required={required} // Set the text area as required by default
                multiline // Make it a multiline text area
                rows={4} // Default to 4 rows for the text area
                fullWidth // Make the text area take full width
                error={Boolean(error)} // Display error state based on the presence of an error
                helperText={error} // Display error message if any
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

export default TextArea;