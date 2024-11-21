import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";

import { Grid, MenuItem, TextField } from "@mui/material";

const ExhibitForm = ({
    onSubmit,
    onInputChange,
    errors,
    data,
}) => {
    return (
        <Form
            title={data._id ? "Edit Exhibit" : "Create Exhibit"}
            onSubmit={onSubmit}
            validateForm={() => true}
            styles={{ maxWidth: "800px" }}
            submitLabel={data._id ? "Update Exhibit" : "Create Exhibit"}
        >
            {/* Name */}
            <Input
                name="name"
                label="Name"
                error={errors.name}
                onChange={onInputChange}
                data={data}
            />

            {/* Description (Textarea) */}
            <Grid item xs={12}>
                <TextField
                    label="Description"
                    name="description"
                    value={data.description || ""}
                    onChange={onInputChange}
                    fullWidth
                    multiline
                    rows={4} // Set rows for multiline input (you can adjust as needed)
                    error={Boolean(errors.description)}
                    helperText={errors.description}
                    variant="outlined"
                    required
                />
            </Grid>

            {/* Location (Select) */}
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Location"
                    name="location"
                    value={data.location || ""}
                    onChange={onInputChange}
                    fullWidth
                    select
                    error={Boolean(errors.location)}
                    helperText={errors.location}
                    variant="outlined"
                    required
                >
                    {/* Location Options */}
                    <MenuItem value="Africa">Africa</MenuItem>
                    <MenuItem value="Asia">Asia</MenuItem>
                    <MenuItem value="Europe">Europe</MenuItem>
                    <MenuItem value="North America">North America</MenuItem>
                    <MenuItem value="South America">South America</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
                    <MenuItem value="Antarctica">Antarctica</MenuItem>
                </TextField>
            </Grid>

            {/* Status (Select) */}
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Status"
                    name="status"
                    value={data.status || "open"} // Default to "open"
                    onChange={onInputChange}
                    fullWidth
                    select
                    error={Boolean(errors.status)}
                    helperText={errors.status}
                    variant="outlined"
                    required
                >
                    {/* Status Options */}
                    <MenuItem value="open">Open</MenuItem>
                    <MenuItem value="closed">Closed</MenuItem>
                    <MenuItem value="under maintenance">Under Maintenance</MenuItem>
                </TextField>
            </Grid>

        </Form>
    );
};

export default ExhibitForm;
