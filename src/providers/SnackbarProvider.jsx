import React, { createContext, useContext, useState, useCallback } from "react";


export default function SnackbarProvider({ children }) {

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

        </>
    );
}

// Hook to use the Snackbar
export const useSnack = () => {
    const context = useContext(SnackbarContext);
    if (!context) throw Error("useSnack must be used within a SnackbarProvider");
    return context;
};
