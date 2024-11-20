import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Application layout component.
import Router from "./routers/Router"; // Main routing component.
import CustomThemeProvider from "./providers/CustomThemeProvider"; // Theme management provider.
import SnackbarProvider from "./providers/SnackbarProvider";

// Main application entry point.
export default function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <SnackbarProvider>
          {/* Wraps all components with theme and layout */}
          <Layout>
            <Router />
          </Layout>
        </SnackbarProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}
