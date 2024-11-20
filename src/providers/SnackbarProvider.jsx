import React, { createContext, useContext, useState, useCallback } from "react";


export default function SnackbarProvider({ children }) {

    const [isSnackOpen, setOpenSnack] = useState(false);
    const [snackColor, setSnackColor] = useState("success"); // 'success', 'error', 'warning', 'info'
    const [snackVariant, setSnackVariant] = useState("filled"); // 'filled' or 'outlined'
    const [snackMessage, setSnackMessage] = useState("");
    const [snackDuration, setSnackDuration] = useState(2500); // Default timing in ms

    return (
        <>

        </>
    );
}
