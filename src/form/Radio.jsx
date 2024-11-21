import React from "react";
import { RadioGroup, FormControlLabel, Radio, Grid } from "@mui/material"; // MUI components for radio buttons and grid

const RadioField = ({
    name, // Name of the input field
    data, // Data object containing the current value of the input
    label, // Label for the input field
    required = true, // Set the input as required by default
    error, // Error message for validation
    onChange, // On change handler for the input field
    options = [], // List of options for radio buttons
    ...rest // Additional props to spread into the Grid item
}) => {

    return (
        <Grid item xs={12} sm={6} {...rest}> {/* Grid item for responsiveness */}
            <RadioGroup
                name={name} // Name attribute for the radio group
                value={data[name] ? data[name] : ""} // Get the value from data
                onChange={onChange} // Callback function for handling input changes
            >
                {options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </Grid>
    );
};

export default RadioField;
