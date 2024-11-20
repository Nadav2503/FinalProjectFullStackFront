import React from 'react';
import Navbar from './Header';
import Footer from './Footer';
import Main from './Main';

// Layout component wrapping the main app content with a navbar and footer.
export default function Layout({ children }) {
    return (
        <>
            {/* Navbar displayed at the top of the page */}
            <Navbar />
            {/* Main content area, where children components are rendered */}
            <Main>{children}</Main>
            {/* Footer displayed at the bottom of the page */}
            <Footer />
        </>
    );
}
