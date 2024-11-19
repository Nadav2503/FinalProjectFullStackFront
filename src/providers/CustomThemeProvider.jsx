import { useCallback, useState } from "react";

export default function CustomThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setIsDark((prevMode) => !prevMode);
    }, []);
    return (<></>);
}