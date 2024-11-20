import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';
import Search from './Search';

export default function MiddleHeader() {
    // State to check if the screen is compact (mobile or tablet).
    const [isCompact, setIsCompact] = useState(false);

    // State to track whether the search bar is open.
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // State to track whether the hamburger menu is open.
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    // Detect screen size and adjust layout accordingly.
    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth <= 960); // Compact layout for screens ≤ 960px.
        };

        window.addEventListener('resize', handleResize); // Add resize listener.
        handleResize(); // Initial layout check.

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up listener.
        };
    }, []);

    // Toggle the visibility of the search bar.
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setIsHamburgerOpen(false); // Ensure hamburger is closed when search is open.
        }
    };

    // Toggle the visibility of the hamburger menu.
    const toggleHamburgerMenu = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', margin: '15px' }}>
            {isCompact ? (
                <>
                    {/* Show HamburgerMenu when search is not open */}
                    {!isSearchOpen && (
                        <HamburgerMenu isOpen={isHamburgerOpen} toggleHamburgerMenu={toggleHamburgerMenu} />
                    )}

                    {/* Search bar for compact layout */}
                    <Search isOpen={isSearchOpen} toggleSearch={toggleSearch} />
                </>
            ) : (
                <>
                    {/* Full Navbar for larger screens */}
                    <Navbar />

                    {/* Search bar for larger screens */}
                    <Search isOpen={isSearchOpen} toggleSearch={toggleSearch} />
                </>
            )}
        </div>
    );
}
