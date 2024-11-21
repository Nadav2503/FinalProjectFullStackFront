import React from "react";
import { Select, MenuItem, FormControl, Grid } from "@mui/material"; // MUI components for select and grid

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

    return (
        <Grid item xs={12} sm={6} {...rest}> {/* Grid item for responsiveness */}
            <FormControl fullWidth required={required} error={Boolean(error)}>
                <Select
                    id={name} // Set the select field's ID
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
            </FormControl>
        </Grid>
    );
};

export default SelectField;
