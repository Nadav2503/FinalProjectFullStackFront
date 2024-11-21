import React from "react";
import { TextField, Grid } from "@mui/material"; // MUI components for text field and grid layout
import { makeFirstLetterCapital } from "./algoMethods"; // Utility function for capitalizing the first letter

const TextArea = ({
    variant = "outlined", // Default variant is outlined
    name, // Name of the input field
    data, // Data object containing the current value of the input
    label, // Label for the input field
    required = true, // Set the input as required by default
    error, // Error message for validation
    onChange, // On change handler for the input field
    rows = 4, // Default rows for textarea
    ...rest // Additional props to spread into the Grid item
}) => {

    return (
        <Grid item xs={12} sm={6} {...rest}> {/* Grid item for responsiveness */}
            <TextField
                variant={variant} // Variant of the TextField (outlined)
                label={makeFirstLetterCapital(label)} // Capitalize the first letter of the label
                id={name} // Set the input field's ID
                name={name} // Name attribute for the input field
                value={data[name] ? data[name] : ""} // Get the value from data
                required={required} // Mark the input as required by default
                helperText={error} // Display error message if any
                error={Boolean(error)} // Display error state based on the presence of an error
                onChange={onChange} // Callback function for handling input changes
                fullWidth // Make the input take the full width of the container
                autoComplete="off" // Disable auto-completion
                rows={rows} // Set the number of rows for the textarea
                multiline // Make the input a multiline textarea

            />
        </Grid>
    );
};

export default TextArea;
