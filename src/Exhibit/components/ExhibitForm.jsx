import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
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
                required
            />


            <Grid >
                <TextField

                />
            </Grid>


            <Grid >
                <TextField

                >

                    <MenuItem value="Africa">Africa</MenuItem>
                    <MenuItem value="Asia">Asia</MenuItem>
                    <MenuItem value="Europe">Europe</MenuItem>
                    <MenuItem value="North America">North America</MenuItem>
                    <MenuItem value="South America">South America</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
                    <MenuItem value="Antarctica">Antarctica</MenuItem>
                </TextField>
            </Grid>


            <Grid >
                <TextField

                >
                    <MenuItem value="open">Open</MenuItem>
                    <MenuItem value="closed">Closed</MenuItem>
                    <MenuItem value="under maintenance">Under Maintenance</MenuItem>
                </TextField>
            </Grid>

        </Form>
    );
};

export default ExhibitForm;
