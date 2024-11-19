import React from 'react';
import Navbar from './Navbar';
import HamburgerMenu from './HamburgerMenu'; // Hamburger menu for compact view
import Search from './Search'; // Search bar as an icon in compact view

export default function MiddleHeader({ isCompact }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {isCompact ? (
                <>
                    <HamburgerMenu />
                    <Search />
                </>
            ) : (
                <>
                    <Navbar /> {/* Full Navbar */}
                </>
            )}
        </div>
    );
}
