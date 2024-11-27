import React from "react";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";

const CheckboxField = ({
    name,
    data,
    label,
    required = false,
    error,
    onChange,
    ...rest
}) => {
    return (
        <Grid {...rest}>
            <Typography >
                {label}
            </Typography>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={data[name] || false}
                        onChange={onChange}
                        name={name}
                    />
                }
                label={label}
            />
            {error && <Typography >{error}</Typography>}
        </Grid>
    );
};

export default CheckboxField;
