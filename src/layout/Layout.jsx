// Importing React and the necessary components for Navbar, Footer, and Main.
import React from 'react';
import Navbar from './Header'; // Navbar component for site navigation.
import Footer from './Footer'; // Footer component for the bottom of the page.
import Main from './Main'; // Main content wrapper component.

// Layout component: Wraps the main app content with a navbar, main content area, and footer.
export default function Layout({ children }) {
    return (
        <>
            {/* Navbar displayed at the top of the page */}
            <Navbar />

            {/* Main content area where children components are rendered */}
            <Main>{children}</Main>

            {/* Footer displayed at the bottom of the page */}
            <Footer />
        </>
    );
}
