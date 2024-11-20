import React, { createContext, useContext, useState, useCallback } from "react";
import { Alert, Snackbar, useTheme } from "@mui/material";

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {
    const theme = useTheme(); // Access the theme for color and mode.
    const [isSnackOpen, setOpenSnack] = useState(false);
    const [snackColor, setSnackColor] = useState("success"); // 'success', 'error', 'warning', 'info'
    const [snackVariant, setSnackVariant] = useState("filled"); // 'filled' or 'outlined'
    const [snackMessage, setSnackMessage] = useState("");
    const [snackDuration, setSnackDuration] = useState(2500); // Default timing in ms

    const setSnack = useCallback(
        (color, message, duration = 2500, variant = "filled") => {
            setOpenSnack(true);
            setSnackColor(color);
            setSnackVariant(variant);
            setSnackMessage(message);
            setSnackDuration(duration);
        },
        []
    );

    return (
        <>
            <SnackbarContext.Provider value={setSnack}>
                {children}
            </SnackbarContext.Provider>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={isSnackOpen}
                onClose={() => setOpenSnack(false)}
                autoHideDuration={snackDuration}
            >
                <Alert
                    severity={snackColor}
                    variant={snackVariant}
                    sx={{
                        backgroundColor:
                            snackVariant === "filled"
                                ? theme.palette[snackColor]?.main || snackColor
                                : "transparent",
                        color:
                            snackVariant === "filled"
                                ? theme.palette[snackColor]?.contrastText ||
                                theme.palette.text.primary
                                : theme.palette[snackColor]?.main || snackColor,
                        border: snackVariant === "outlined" ? `1px solid ${theme.palette[snackColor]?.main || snackColor}` : "none",
                    }}
                >
                    {snackMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

// Hook to use the Snackbar
export const useSnack = () => {
    const context = useContext(SnackbarContext);
    if (!context) throw Error("useSnack must be used within a SnackbarProvider");
    return context;
};
