import React from "react";
import { TextField, Grid } from "@mui/material";


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


    return (
        <Grid item xs={12} {...rest}>
            <TextField
            />
        </Grid>
    );
};

export default Input;