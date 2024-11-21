import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Grid, FormHelperText } from "@mui/material"; // MUI components
import { useTheme } from "@mui/material/styles"; // Access the theme

const SelectField = ({
    name, // Name of the input field
    data, // Data object containing the current value of the input
    label, // Label for the input field
    required = true, // Set the input as required by default
    error, // Error message for validation
    onChange, // On change handler for the input field
    options = [], // List of options to populate the select dropdown
    ...rest // Additional props to spread into the Grid item
}) => {
    const theme = useTheme(); // Access the current theme (light or dark)

    // Dynamic styling based on theme mode (light or dark)
    const inputBorderColor = theme.palette.mode === "dark" ? "#B0BEC5" : "#47663B";
    const labelColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";

    return (
        <Grid item xs={12} sm={6} {...rest}> {/* Grid item for responsiveness */}
            <FormControl
                fullWidth
                required={required}
                error={Boolean(error)}
                sx={{
                    '& .MuiFormLabel-root': {
                        color: labelColor, // Label color
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
                }}
            >
                <InputLabel
                    id={`${name}-label`}
                    shrink={Boolean(data[name]) || Boolean(error)} // Ensure label shrinks when focused or has a value
                    sx={{
                        color: labelColor,
                        '&.Mui-focused': {
                            color: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300", // Focused label color
                        },
                    }}
                >
                    {label}
                </InputLabel>
                <Select
                    id={name} // Set the select field's ID
                    labelId={`${name}-label`} // Associate the InputLabel with the Select
                    name={name} // Name attribute for the select field
                    value={data[name] ? data[name] : ""} // Get the value from data
                    onChange={onChange} // Callback function for handling input changes
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {error && <FormHelperText>{error}</FormHelperText>} {/* Display error message if any */}
            </FormControl>
        </Grid>
    );
};

export default SelectField;
