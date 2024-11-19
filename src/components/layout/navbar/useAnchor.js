import { useState } from 'react';

export default function useAnchor() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAnchorClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAnchorClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        handleAnchorClick,
        handleAnchorClose,
    };
}
