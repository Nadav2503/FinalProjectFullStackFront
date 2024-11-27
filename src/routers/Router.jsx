// Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routerModel"; // Centralized routing constants

import Home from "../pages/HomePage"; // Home page component
import About from "../pages/AboutPage"; // About page component
import Error from "../pages/ErrorPage"; // 404 Error page component
import ExhibitListPage from "../Exhibit/pages/ExhibitListPage"; // All exhibits page
import ExhibitDetailsPage from "../Exhibit/pages/ExhibitDetailsPage"; // Specific exhibit page
import AddExhibitPage from "../Exhibit/pages/AddExhibitPage"; // Add new exhibit page
import EditExhibitPage from "../Exhibit/pages/EditExhibitPage"; // Edit an exhibit page

// Main Router component to define application routes
export default function Router() {
    return (
        <Routes>
            {/* Route for the homepage */}
            <Route path={ROUTES.ROOT} element={<Home />} />

            {/* Route for the About page */}
            <Route path={ROUTES.ABOUT} element={<About />} />

            {/* Route for the exhibits page */}
            <Route path={ROUTES.EXHIBITS} element={<ExhibitListPage />} />

            {/* Route for adding a new exhibit */}
            <Route path={ROUTES.ADD_EXHIBIT} element={<AddExhibitPage />} />

            {/* Route for editing an exhibit */}
            <Route path={`${ROUTES.EDIT_EXHIBIT}/:id`} element={<EditExhibitPage />} />

            {/* Route for a specific exhibit details page */}
            <Route path={`${ROUTES.EXHIBIT_INFO}/:exhibitId`} element={<ExhibitDetailsPage />} />

            {/* Fallback route for non-existent paths */}
            <Route path={ROUTES.ERROR} element={<Error />} />
        </Routes>
    );
}
