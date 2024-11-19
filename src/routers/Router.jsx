import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routerModel";

import Home from "../pages/HomePage";
import About from "../pages/aboutPage";
import Error from "../pages/ErrorPage";

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}
