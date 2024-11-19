import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu';
import Search from './Search';

export default function MiddleHeader() {
    const [isCompact, setIsCompact] = useState(false); // To check if it's mobile/tablet
    const [isSearchOpen, setIsSearchOpen] = useState(false); // To check if search bar is open
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // To track the hamburger menu state

    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth <= 960); // You can tweak this as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setIsHamburgerOpen(false); // Close hamburger when opening search
        }
    };

    const toggleHamburgerMenu = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {isCompact ? (
                <>
                    {/* Show HamburgerMenu only when search is not open */}
                    {!isSearchOpen && (
                        <HamburgerMenu isOpen={isHamburgerOpen} toggleHamburgerMenu={toggleHamburgerMenu} />
                    )}

                    {/* Search Bar */}
                    <Search isOpen={isSearchOpen} toggleSearch={toggleSearch} />
                </>
            ) : (
                <>
                    {/* Full Navbar for larger screens */}
                    <Navbar />

                    {/* Search Bar for larger screens */}
                    <Search isOpen={isSearchOpen} toggleSearch={toggleSearch} />
                </>
            )}
        </div>
    );
}
