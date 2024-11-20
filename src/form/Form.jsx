import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../general/CustomButton";


const Form = (
) => {


    return (
        <Box
        >
            {/* Form Title */}
            {title && (
                <Typography
                >
                    {title}
                </Typography>
            )}

            {/* Form Fields */}
            <Grid container spacing={spacing}>
                {children}
            </Grid>

            {/* Form Actions */}
            <Grid
            >
                <Grid item xs={12} sm={6}>
                    <CustomButton
                    >
                        {cancelLabel}
                    </CustomButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomButton
                    >
                        {submitLabel}
                    </CustomButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
