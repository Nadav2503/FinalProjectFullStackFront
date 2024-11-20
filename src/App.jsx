import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router"; // Main routing component.
import CustomThemeProvider from "./providers/CustomThemeProvider"; // Theme management provider.
import SnackbarProvider from "./providers/SnackbarProvider";
import Layout from "./layout/Layout";

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
