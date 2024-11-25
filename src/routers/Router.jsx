import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routerModel"; // Centralized routing constants.

import Home from "../pages/HomePage"; // Home page component.
import About from "../pages/AboutPage"; // About page component.
import Error from "../pages/ErrorPage"; // 404 Error page component.
import ExhibitListPage from "../Exhibit/pages/ExhibitListPage";

// Main Router component to define application routes.
export default function Router() {
    return (
        <Routes>
            {/* Route for the homepage */}
            <Route path={ROUTES.ROOT} element={<Home />} />

            {/* Route for the About page */}
            <Route path={ROUTES.ABOUT} element={<About />} />

            {/* Route for the Add exhibit page */}
            <Route path={ROUTES.EXHIBIT} element={<ExhibitListPage />} />

            {/* Fallback route for non-existent paths */}
            <Route path="*" element={<Error />} />
        </Routes>
    );
}
